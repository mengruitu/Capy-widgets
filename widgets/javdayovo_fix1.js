var WidgetMetadata = {
  id: "javday_pro_final_mak_fix1",
  title: "JAVDay_ovo_fix",
  description: "兼容壳子版 JAVDay（先修列表，搜索加保护）",
  author: "MakkaPakka + 乖乖",
  site: "https://javday.app",
  version: "1.0.3",
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
        {
          name: "keyword",
          title: "女优/番号/关键词搜索…",
          type: "input",
          value: "",
          description: "女优/番号/关键词搜索…",
        },
        {
          name: "page",
          title: "页码",
          type: "page",
          description: "搜索结果页码"
        }
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
        {
          name: "page",
          title: "页码",
          type: "page"
        }
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
        {
          name: "page",
          title: "页码",
          type: "page"
        }
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
        {
          name: "page",
          title: "页码",
          type: "page"
        }
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

  function pushItem(link, title, imgSrc) {
    if (!link || !title) return;
    if (!/^https?:\/\//i.test(link)) {
      link = link.startsWith('//') ? `https:${link}` : `${BASE_URL}${link.startsWith('/') ? '' : '/'}${link}`;
    }
    if (imgSrc) {
      if (imgSrc.startsWith('//')) imgSrc = `https:${imgSrc}`;
      else if (!/^https?:\/\//i.test(imgSrc)) imgSrc = `${BASE_URL}${imgSrc.startsWith('/') ? '' : '/'}${imgSrc}`;
    }
    results.push({
      id: `${results.length}|${link}`,
      type: 'url',
      title: safeText(decodeHtmlEntities(title)),
      imgSrc: imgSrc || '',
      backdropPath: imgSrc || '',
      link,
      description: '来自 JAVDay',
      mediaType: 'movie'
    });
  }

  // 方案1：精确匹配 <a class="videoBox" ...>
  const blocks1 = html.split('<a class="videoBox"').slice(1);
  for (const block of blocks1) {
    const hrefMatch = block.match(/href="([^"]+)"/i);
    const titleMatch = block.match(/<div class="title">([\s\S]*?)<\/div>/i);
    const styleMatch = block.match(/class="videoBox-cover"[^>]*style="([^"]+)"/i);
    let imgSrc = '';
    if (styleMatch) {
      const urlMatch = styleMatch[1].match(/url\(\s*['"]?([^'")]+)['"]?\s*\)/i);
      if (urlMatch && urlMatch[1]) imgSrc = urlMatch[1];
    }
    pushItem(hrefMatch && hrefMatch[1], titleMatch && titleMatch[1], imgSrc);
  }
  if (results.length) return results;

  // 方案2：更宽松匹配 videoBox 链接块
  const re = /<a[^>]*class="[^"]*videoBox[^"]*"[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi;
  let m;
  while ((m = re.exec(html)) !== null) {
    const link = m[1];
    const inner = m[2] || '';
    const titleMatch = inner.match(/<div[^>]*class="[^"]*title[^"]*"[^>]*>([\s\S]*?)<\/div>/i)
      || inner.match(/title="([^"]+)"/i);
    const styleMatch = inner.match(/class="[^"]*videoBox-cover[^"]*"[^>]*style="([^"]+)"/i);
    const imgMatch = inner.match(/<img[^>]+src="([^"]+)"/i) || inner.match(/<img[^>]+data-src="([^"]+)"/i);
    let imgSrc = '';
    if (styleMatch) {
      const urlMatch = styleMatch[1].match(/url\(\s*['"]?([^'")]+)['"]?\s*\)/i);
      if (urlMatch && urlMatch[1]) imgSrc = urlMatch[1];
    } else if (imgMatch && imgMatch[1]) {
      imgSrc = imgMatch[1];
    }
    pushItem(link, titleMatch && titleMatch[1], imgSrc);
  }
  if (results.length) return results;

  // 方案3：最后兜底，按 href=/videos/... 抠标题
  const re2 = /href="(\/videos\/[^"]+)"[\s\S]{0,1200}?<div[^>]*class="[^"]*title[^"]*"[^>]*>([\s\S]*?)<\/div>/gi;
  while ((m = re2.exec(html)) !== null) {
    const link = m[1];
    const title = m[2];
    pushItem(link, title, '');
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
  if (!keyword) {
    return [{ id: 'tip', type: 'text', title: '请输入关键词', description: '不能为空' }];
  }
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
    if (!html) {
      return [{ id: 'err', type: 'text', title: '搜索失败', description: '未获取到页面内容' }];
    }
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
        'Referer': link
      }
    });
    const html = typeof response === 'string' ? response : (response && response.data ? response.data : '');
    if (!html) throw new Error('无法获取详情页内容');

    let videoUrl = '';
    const m1 = html.match(/video\s*:\s*\{\s*[^}]*url\s*:\s*['"]([^'"]+)['"]/i);
    const m2 = html.match(/url\s*:\s*['"]([^'"]+\.m3u8[^'"]*)['"]/i);
    const m3 = html.match(/['"](https?:\/\/[^'"]+\.m3u8[^'"]*)['"]/i);
    if (m1 && m1[1]) videoUrl = m1[1];
    else if (m2 && m2[1]) videoUrl = m2[1];
    else if (m3 && m3[1]) videoUrl = m3[1];

    if (!videoUrl) {
      return [{ id: 'err', type: 'text', title: '解析失败', description: '未找到 m3u8 播放地址' }];
    }

    return [{
      id: link,
      type: 'url',
      videoUrl,
      customHeaders: {
        'Referer': link,
        'User-Agent': JAVDAY_USER_AGENT
      }
    }];
  } catch (error) {
    return [{ id: 'err', type: 'text', title: '详情失败', description: String(error && error.message || error) }];
  }
}
