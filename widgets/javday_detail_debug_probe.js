var WidgetMetadata = {
  id: "javday_detail_debug_probe_v1",
  title: "JAVDay_Detail_Debug_V1",
  description: "专门调试详情页和播放地址提取",
  author: "MakkaPakka + 乖乖",
  site: "https://javday.app",
  version: "1.0.0",
  requiredVersion: "0.0.1",
  modules: [
    {
      title: "调试详情页",
      description: "输入 JAVDay 详情页链接，检查播放地址提取",
      requiresWebView: false,
      functionName: "debugDetail",
      cacheDuration: 30,
      params: [
        {
          name: "link",
          title: "详情页链接",
          type: "input",
          value: "https://javday.app/videos/FNS164/",
          description: "例如 https://javday.app/videos/FNS164/"
        }
      ]
    }
  ]
};

const JAVDAY_USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36";

function cut(str, n) {
  str = String(str || '');
  return str.length > n ? str.slice(0, n) + ' ...' : str;
}

async function debugDetail(params = {}) {
  const link = String(params.link || '').trim();
  if (!link) {
    return [{ id: 'err', type: 'text', title: 'ERR: 请输入详情页链接' }];
  }

  try {
    const response = await Widget.http.get(link, {
      headers: {
        'User-Agent': JAVDAY_USER_AGENT,
        'Referer': link,
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
      }
    });

    const html = typeof response === 'string' ? response : (response && response.data ? String(response.data) : '');
    const raw = typeof response === 'string' ? response : JSON.stringify(response, null, 2);

    const hints = [];
    if (/DPlayer/i.test(html)) hints.push('DPlayer');
    if (/m3u8/i.test(html)) hints.push('m3u8');
    if (/video\s*:\s*\{/i.test(html)) hints.push('video-object');
    if (/source\s*=\s*["']/i.test(html)) hints.push('source=');
    if (/playlist\.m3u8/i.test(html)) hints.push('playlist.m3u8');
    if (/Just a moment|cf-browser-verification|Checking your browser/i.test(html)) hints.push('Cloudflare');
    if (!hints.length) hints.push('no-hints');

    let extracted = '';
    const m1 = html.match(/video\s*:\s*\{\s*[^}]*url\s*:\s*['"]([^'"]+)['"]/i);
    const m2 = html.match(/url\s*:\s*['"]([^'"]+\.m3u8[^'"]*)['"]/i);
    const m3 = html.match(/['"](https?:\/\/[^'"]+\.m3u8[^'"]*)['"]/i);
    const m4 = html.match(/<source[^>]+src=['"]([^'"]+)['"]/i);
    const m5 = html.match(/<video[^>]+src=['"]([^'"]+)['"]/i);
    if (m1 && m1[1]) extracted = m1[1];
    else if (m2 && m2[1]) extracted = m2[1];
    else if (m3 && m3[1]) extracted = m3[1];
    else if (m4 && m4[1]) extracted = m4[1];
    else if (m5 && m5[1]) extracted = m5[1];

    const htmlOne = cut(html.replace(/\s+/g, ' '), 220);
    const rawOne = cut(raw.replace(/\s+/g, ' '), 220);

    return [
      { id: 'd1', type: 'text', title: `LINK: ${cut(link, 110)}` },
      { id: 'd2', type: 'text', title: `HINTS: ${cut(hints.join(' | '), 110)}` },
      { id: 'd3', type: 'text', title: `EXTRACTED: ${cut(extracted || 'NONE', 180)}` },
      { id: 'd4', type: 'text', title: `HTML: ${htmlOne}` },
      { id: 'd5', type: 'text', title: `RAW: ${rawOne}` }
    ];
  } catch (error) {
    return [{ id: 'err', type: 'text', title: `ERR: ${String(error && error.message || error)}` }];
  }
}
