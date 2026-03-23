var WidgetMetadata = {
  id: "javday_pro_final_mak_fix2",
  title: "JAVDay_ovo_fix2",
  description: "兼容壳子版 JAVDay（列表+详情播放修复）",
  author: "MakkaPakka + 乖乖",
  site: "https://javday.app",
  version: "1.0.4",
  requiredVersion: "0.0.1",
  detailCacheDuration: 60,
  modules: [
    {
      title: "搜索视频",
      description: "搜索JAVDay视频库（短关键词保护）",
      requiresWebView: false,
      functionName: "search",
      cacheDuration: 3600,
      params: [
        { name: "keyword", title: "女优/番号/关键词搜索…", type: "input", value: "", description: "女优/番号/关键词搜索…" },
        { name: "page", title: "页码", type: "page", description: "搜索结果页码" }
      ]
    },
    {
      title: "榜单",
      description: "最新、热门及新作榜单",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        {
          name: "url",
          title: "选择榜单",
          type: "enumeration",
          value: "https://javday.app/label/new/",
          enumOptions: [
            { title: "🆕 最新更新", value: "https://javday.app/label/new/" },
            { title: "🔥 人气系列", value: "https://javday.app/label/hot/" },
            { title: "💿 新作上市", value: "https://javday.app/category/new-release/" }
          ]
        },
        {
          name: "sort_by",
          title: "排序方式",
          type: "enumeration",
          value: "new",
          enumOptions: [
            { title: "最新上架", value: "new" },
            { title: "人气最高", value: "popular" }
          ]
        },
        { name: "page", title: "页码", type: "page" }
      ]
    },
    {
      title: "类型选择",
      description: "有码、无码、流出及杏吧",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        {
          name: "url",
          title: "选择类型",
          type: "enumeration",
          value: "https://javday.app/category/uncensored/",
          enumOptions: [
            { title: "🔞 无码视频", value: "https://javday.app/category/uncensored/" },
            { title: "🛡️ 有码视频", value: "https://javday.app/category/censored/" },
            { title: "💦 无码流出", value: "https://javday.app/category/uncensored-leaked/" },
            { title: "🎱 杏吧视频", value: "https://javday.app/category/sex8/" }
          ]
        },
        {
          name: "sort_by",
          title: "排序方式",
          type: "enumeration",
          value: "new",
          enumOptions: [
            { title: "最新上架", value: "new" },
            { title: "人气最高", value: "popular" }
          ]
        },
        { name: "page", title: "页码", type: "page" }
      ]
    },
    {
      title: "国产",
      description: "玩偶姐姐、国产AV及各大厂商",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        {
          name: "url",
          title: "选择分类/厂商",
          type: "enumeration",
          value: "https://javday.app/category/hongkongdoll/",
          enumOptions: [
            { title: "👯 玩偶姐姐", value: "https://javday.app/category/hongkongdoll/" },
            { title: "🇨🇳 国产 AV", value: "https://javday.app/category/chinese-av/" },
            { title: "麻豆传媒", value: "https://javday.app/index.php/category/madou/" },
            { title: "果冻传媒", value: "https://javday.app/index.php/category/91zhipianchang/" },
            { title: "天美传媒", value: "https://javday.app/index.php/category/timi/" },
            { title: "星空无限", value: "https://javday.app/index.php/category/xingkong/" },
            { title: "皇家华人", value: "https://javday.app/index.php/category/royalasianstudio/" },
            { title: "蜜桃影像", value: "https://javday.app/index.php/category/mtgw/" },
            { title: "精东影业", value: "https://javday.app/index.php/category/jdav/" },
            { title: "台湾 AV", value: "https://javday.app/index.php/category/twav/" },
            { title: "JVID", value: "https://javday.app/index.php/category/jvid/" },
            { title: "萝莉社", value: "https://javday.app/index.php/category/luolisheus/" },
            { title: "糖心VLOG", value: "https://javday.app/index.php/category/txvlog/" },
            { title: "Psychoporn TW", value: "https://javday.app/index.php/category/psychoporn-tw/" }
          ]
        },
        {
          name: "sort_by",
          title: "排序方式",
          type: "enumeration",
          value: "new",
          enumOptions: [
            { title: "最新上架", value: "new" },
            { title: "人气最高", value: "popular" }
          ]
        },
        { name: "page", title: "页码", type: "page" }
      ]
    }
  ]
};

const JAVDAY_USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36";
const BASE_URL = "https://javday.app";

function safeText(s) {
  return (s || "").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

function decodeHtmlEntities(str) {
  return (str || "")
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');
}

function normalizeUrl(u) {
  if (!u) return '';
  if (/^https?:\/\//i.test(u)) return u;
  if (u.startsWith('//')) return `https:${u}`;
  return `${BASE_URL}${u.startsWith('/') ? '' : '/'}${u}`;
}

function normalizeImg(u) {
  if (!u) return '';
  if (u.startsWith('//')) return `https:${u}`;
  if (!/^https?:\/\//i.test(u)) return `${BASE_URL}${u.startsWith('/') ? '' : '/'}${u}`;
  return u;
}

function extractCategoryId(url) {
  const match = url.match(/\/([^/]+)\/?$/);
  if (match && match[1]) return match[1].replace(/\/+$/, '');
  const parts = url.split('/').filter(Boolean);
  return parts[parts.length - 1] || 'unknown';
}

function buildPageUrl(baseUrl, sortBy, page) {
  const categoryId = extractCategoryId(baseUrl);
  const cleanBaseUrl = baseUrl.replace(/index\.php\//g, '');
  let path;
  if (sortBy === 'popular') {
    path = `/fiter/by/hits/id/${categoryId}`;
  } else {
    path = cleanBaseUrl.includes('label/')
      ? cleanBaseUrl.replace(/\/page\/\d+\/?$/, '').replace(BASE_URL, '')
      : `/category/${categoryId}`;
  }
  if (page > 1) return `${BASE_URL}${path}/page/${page}/`;
  return `${BASE_URL}${path}`;
}

function parseVideoCards(html) {
  const results = [];
  const seen = new Set();

  function pushItem(link, title, imgSrc) {
    link = normalizeUrl(link);
    title = safeText(decodeHtmlEntities(title));
    imgSrc = normalizeImg(imgSrc || '');
    if (!link || !title) return;
    if (!/\/videos\//i.test(link)) return;
    const key = `${link}::${title}`;
    if (seen.has(key)) return;
    seen.add(key);
    results.push({
      id: link,
      type: 'url',
      title,
      imgSrc,
      backdropPath: imgSrc,
      link,
      mediaType: 'movie',
      description: '来自 JAVDay'
    });
  }

  const re = /href="(\/videos\/[^"]+)"([\s\S]{0,2500}?)(?=href="\/videos\/|$)/gi;
  let m;
  while ((m = re.exec(html)) !== null) {
    const link = m[1];
    const chunk = m[2] || '';
    const titleMatch = chunk.match(/class="[^"]*title[^"]*"[^>]*>([\s\S]*?)<\/div>/i)
      || chunk.match(/title="([^"]+)"/i)
      || chunk.match(/alt="([^"]+)"/i);
    const styleMatch = chunk.match(/videoBox-cover[^>]*style="([^"]+)"/i);
    const imgMatch = chunk.match(/<img[^>]+(?:data-src|src)="([^"]+)"/i);
    let imgSrc = '';
    if (styleMatch) {
      const urlMatch = styleMatch[1].match(/url\(\s*['"]?([^'")]+)['"]?\s*\)/i);
      if (urlMatch && urlMatch[1]) imgSrc = urlMatch[1];
    }
    if (!imgSrc && imgMatch && imgMatch[1]) imgSrc = imgMatch[1];
    pushItem(link, titleMatch && titleMatch[1], imgSrc);
  }
  if (results.length) return results;

  const hrefs = [...html.matchAll(/href="(\/videos\/[^"]+)"/gi)].map(x => x[1]);
  const titles = [...html.matchAll(/class="[^"]*title[^"]*"[^>]*>([\s\S]*?)<\/div>/gi)].map(x => x[1]);
  for (let i = 0; i < Math.min(hrefs.length, titles.length); i++) {
    pushItem(hrefs[i], titles[i], '');
  }
  return results;
}

async function loadPage(params = {}) {
  const targetUrl = buildPageUrl(params.url, params.sort_by || 'new', parseInt(params.page, 10) || 1);
  try {
    const response = await Widget.http.get(targetUrl, {
      headers: {
        'User-Agent': JAVDAY_USER_AGENT,
        'Referer': BASE_URL + '/',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
      }
    });
    const html = typeof response === 'string' ? response : (response && response.data ? response.data : '');
    if (!html) {
      return [{ id: 'err', type: 'text', title: '加载失败', description: '未获取到页面内容' }];
    }
    const items = parseVideoCards(html);
    return items.length ? items : [{ id: 'empty', type: 'text', title: '暂无数据', description: '页面返回成功，但未解析出视频列表' }];
  } catch (error) {
    return [{ id: 'err', type: 'text', title: '加载失败', description: String(error && error.message || error) }];
  }
}

async function search(params = {}) {
  const keyword = String(params.keyword || '').trim();
  const page = parseInt(params.page, 10) || 1;
  if (!keyword) return [{ id: 'tip', type: 'text', title: '请输入关键词', description: '不能为空' }];
  if ([...keyword].length < 2) {
    return [{ id: 'short', type: 'text', title: '关键词太短', description: 'JAVDay 搜索接口容易风控，建议至少输入 2 个字或更具体的番号/女优名' }];
  }
  const searchUrl = page === 1
    ? `${BASE_URL}/search/?wd=${encodeURIComponent(keyword)}`
    : `${BASE_URL}/search/page/${page}/wd/${encodeURIComponent(keyword)}/`;
  try {
    const response = await Widget.http.get(searchUrl, {
      headers: {
        'User-Agent': JAVDAY_USER_AGENT,
        'Referer': BASE_URL + '/',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
      }
    });
    const html = typeof response === 'string' ? response : (response && response.data ? response.data : '');
    if (!html) return [{ id: 'err', type: 'text', title: '搜索失败', description: '未获取到页面内容' }];
    if (/Just a moment|cf-browser-verification|Checking your browser/i.test(html)) {
      return [{ id: 'cf', type: 'text', title: '搜索被风控拦截', description: 'JAVDay 搜索页触发了 Cloudflare 防护，当前壳子无法直接绕过' }];
    }
    const items = parseVideoCards(html);
    return items.length ? items : [{ id: 'empty', type: 'text', title: '没有找到结果', description: `关键词：${keyword}` }];
  } catch (error) {
    return [{ id: 'err', type: 'text', title: '搜索失败', description: String(error && error.message || error) }];
  }
}

async function loadDetail(link) {
  try {
    const response = await Widget.http.get(link, {
      headers: {
        'User-Agent': JAVDAY_USER_AGENT,
        'Referer': link,
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
      }
    });
    const html = typeof response === 'string' ? response : (response && response.data ? response.data : '');
    if (!html) throw new Error('无法获取详情页内容');

    let videoUrl = '';
    const m1 = html.match(/video\s*:\s*\{\s*[^}]*url\s*:\s*['"]([^'"]+)['"]/i);
    const m2 = html.match(/url\s*:\s*['"]([^'"]+\.m3u8[^'"]*)['"]/i);
    const m3 = html.match(/['"](https?:\/\/[^'"]+\.m3u8[^'"]*)['"]/i);
    const m4 = html.match(/<source[^>]+src=['"]([^'"]+)['"]/i);
    const m5 = html.match(/<video[^>]+src=['"]([^'"]+)['"]/i);
    if (m1 && m1[1]) videoUrl = m1[1];
    else if (m2 && m2[1]) videoUrl = m2[1];
    else if (m3 && m3[1]) videoUrl = m3[1];
    else if (m4 && m4[1]) videoUrl = m4[1];
    else if (m5 && m5[1]) videoUrl = m5[1];

    if (!videoUrl) {
      return {
        id: link,
        type: 'text',
        title: '解析失败',
        description: '未找到 m3u8 播放地址'
      };
    }

    return {
      id: link,
      type: 'video',
      title: 'JAVDay 播放',
      videoUrl: videoUrl,
      link: link,
      playerType: 'system',
      mediaType: 'movie',
      customHeaders: {
        'Referer': link,
        'Origin': 'https://javday.app',
        'User-Agent': JAVDAY_USER_AGENT
      }
    };
  } catch (error) {
    return {
      id: link,
      type: 'text',
      title: '详情失败',
      description: String(error && error.message || error)
    };
  }
}
