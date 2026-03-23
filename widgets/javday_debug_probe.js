var WidgetMetadata = {
  id: "javday_debug_probe_mak",
  title: "JAVDay_Debug",
  description: "专门调试壳子里实际拿到的 HTML",
  author: "MakkaPakka + 乖乖",
  site: "https://javday.app",
  version: "1.0.0",
  requiredVersion: "0.0.1",
  modules: [
    {
      title: "调试榜单页",
      description: "查看实际返回的 HTML 关键片段",
      requiresWebView: false,
      functionName: "debugFetch",
      cacheDuration: 30,
      params: [
        {
          name: "url",
          title: "页面地址",
          type: "enumeration",
          value: "https://javday.app/label/new/",
          enumOptions: [
            { title: "🆕 最新更新", value: "https://javday.app/label/new/" },
            { title: "🔥 人气系列", value: "https://javday.app/label/hot/" },
            { title: "💿 新作上市", value: "https://javday.app/category/new-release/" },
            { title: "🔞 无码视频", value: "https://javday.app/category/uncensored/" },
            { title: "🛡️ 有码视频", value: "https://javday.app/category/censored/" }
          ]
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

async function debugFetch(params = {}) {
  const targetUrl = params.url || 'https://javday.app/label/new/';
  try {
    const response = await Widget.http.get(targetUrl, {
      headers: {
        'User-Agent': JAVDAY_USER_AGENT,
        'Referer': 'https://javday.app/',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
      }
    });

    const raw = typeof response === 'string' ? response : JSON.stringify(response, null, 2);
    const html = typeof response === 'string' ? response : (response && response.data ? String(response.data) : '');

    const hints = [];
    if (/Just a moment|cf-browser-verification|Checking your browser/i.test(html)) hints.push('命中 Cloudflare / Just a moment');
    if (/videoBox/i.test(html)) hints.push('包含 videoBox');
    if (/video-wrapper/i.test(html)) hints.push('包含 video-wrapper');
    if (/href="\/videos\//i.test(html)) hints.push('包含 /videos/ 链接');
    if (/class="title"/i.test(html)) hints.push('包含 title class');
    if (/DPlayer|m3u8/i.test(html)) hints.push('包含播放器相关字样');
    if (!hints.length) hints.push('未命中任何预设特征');

    return [
      {
        id: 'status',
        type: 'text',
        title: '调试状态',
        description: `请求成功\nURL: ${targetUrl}`
      },
      {
        id: 'hints',
        type: 'text',
        title: '命中特征',
        description: hints.join(' | ')
      },
      {
        id: 'html-head',
        type: 'text',
        title: 'HTML 前 1000 字',
        description: cut(html.replace(/\s+/g, ' '), 1000)
      },
      {
        id: 'raw-head',
        type: 'text',
        title: '原始响应前 1000 字',
        description: cut(raw.replace(/\s+/g, ' '), 1000)
      }
    ];
  } catch (error) {
    return [
      {
        id: 'err',
        type: 'text',
        title: '调试失败',
        description: String(error && error.message || error)
      }
    ];
  }
}
