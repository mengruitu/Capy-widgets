var WidgetMetadata = {
  id: "Bitch",
  title: "Bitch Lives",
  description: "Bitch Lives",
  author: "Discount Code：VEUS",
  site: "Discount Code：VEUS",
  version: "1.0.1",
  requiredVersion: "0.0.1",
  detailCacheDuration: 300,
  modules: [
    {
      title: "碧池直播",
      requiresWebView: false,
      functionName: "getVideos",
      type: "list",
      params: [
        {
          name: "category",
          title: "类型",
          type: "enumeration",
          enumOptions: [
            { title: "卡哇伊", value: "jsonkawayi" },
            { title: "咪狐", value: "jsonmihu" },
            { title: "花蝴蝶", value: "jsonhuahudie" },
            { title: "蜜桃", value: "jsonmitao" },
            { title: "番茄社区", value: "jsonfanjiashequ" },
            { title: "LOVE", value: "jsonLOVE" },
            { title: "小妲己", value: "jsonxiaodaji" },
            { title: "77直播", value: "json77zhibo" },
            { title: "依依", value: "jsonyiyi" },
            { title: "日出", value: "jsonrichu" },
            { title: "彩虹", value: "jsoncaihong" },
            { title: "久久", value: "jsonjiujiu" },
            { title: "亚米", value: "jsonyami" },
            { title: "蝶恋", value: "jsondielian" },
            { title: "夜妖姬", value: "jsonyeyaoji" },
            { title: "套路", value: "jsontaolu" },
            { title: "樱花", value: "jsonyinghua" },
            { title: "享色", value: "jsonxiangse" },
            { title: "红浪漫", value: "jsonhonglangman" },
            { title: "金鱼", value: "jsonjinyu" },
            { title: "桃花", value: "jsontaohua" },
            { title: "花房", value: "jsonhuafang" },
            { title: "小仙女", value: "jsonxiaoxiannv" },
            { title: "视觉秀", value: "jsonshijuexiu" },
            { title: "小天使", value: "jsonxiaotianshi" },
            { title: "一直播", value: "jsonyizhibo" },
            { title: "彩云", value: "jsoncaiyun" },
            { title: "暗语", value: "jsonanyu" },
            { title: "咪咪", value: "jsonmimi" },
            { title: "娇媚", value: "jsonjiaomei" },
            { title: "黄瓜", value: "jsonhuanggua" },
            { title: "色趣", value: "jsonsequ" },
            { title: "糯米", value: "jsonnuomi" },
            { title: "小蜜蜂", value: "jsonxiaomifeng" },
            { title: "小红帽", value: "jsonxiaohongmao" },
            { title: "桃花运", value: "jsontaohuayun" },
            { title: "苦瓜", value: "jsonkugua" },
            { title: "爱爱你", value: "jsonaiaini" },
            { title: "樱花雨i", value: "jsonyinghuayui" },
            { title: "盘他", value: "jsonpanta" },
            { title: "夜色", value: "jsonyese" },
            { title: "蝴蝶", value: "jsonhudie" },
            { title: "小天仙", value: "jsonxiaotianxian" },
            { title: "杏趣", value: "jsonxingqu" },
            { title: "小坏蛋", value: "jsonxiaohuaidan" },
            { title: "飘雪", value: "jsonpiaoxue" },
            { title: "樱桃", value: "jsonyingtao" },
            { title: "奥斯卡", value: "jsonaosika" },
            { title: "卡路里", value: "jsonkaluli" },
            { title: "红高粱", value: "jsonhonggaoliang" },
            { title: "付宝", value: "jsonfubao" },
            { title: "小黄书", value: "jsonxiaohuangshu" },
            { title: "二嫂", value: "jsonersao" },
            { title: "花果山", value: "jsonhuaguoshan" },
            { title: "云鹿", value: "jsonyunlu" },
            { title: "菠萝", value: "jsonboluo" },
            { title: "星宝贝", value: "jsonxingbaobei" },
            { title: "夜艳", value: "jsonyeyan" },
            { title: "七仙女s", value: "jsonqixiannus" },
            { title: "夜来香", value: "jsonyelaixiang" },
            { title: "爱零", value: "jsonailing" },
            { title: "十八禁", value: "jsonshibajin" },
            { title: "兰桂坊", value: "jsonlanguifang" },
            { title: "Dancelife", value: "jsonDancelife" },
            { title: "小萌猪", value: "jsonxiaomengzhu" },
            { title: "蝴蝶飞", value: "jsonhudiefei" },
            { title: "幽梦", value: "jsonyoumeng" },
            { title: "丽柜厅", value: "jsonliguiting" },
            { title: "蛟龙", value: "jsonjiaolong" },
            { title: "颜如玉", value: "jsonyanruyu" },
            { title: "橙秀", value: "jsonchengxiu" },
            { title: "豹娱l", value: "jsonbaoyul" },
            { title: "小花螺", value: "jsonxiaohualuo" },
            { title: "皇后", value: "jsonhuanghou" },
            { title: "心之恋", value: "jsonxinzhilian" },
            { title: "欧美FEATURED", value: "jsonoumeiFEATURED" },
            { title: "欧美FEMALE", value: "jsonoumeiFEMALE" },
            { title: "欧美MALE", value: "jsonoumeiMALE" },
            { title: "欧美COUPLE", value: "jsonoumeiCOUPLE" },
            { title: "欧美TRANS", value: "jsonoumeiTRANS" },
            { title: "台妹l", value: "jsontaimeil" },
            { title: "爱恋", value: "jsonailian" },
            { title: "903娱乐", value: "json903yule" },
            { title: "九尾狐", value: "jsonjiuweihu" },
            { title: "尤物岛", value: "jsonyouwudao" },
            { title: "坦克", value: "jsontanke" },
            { title: "好基友", value: "jsonhaojiyou" },
            { title: "夜女郎", value: "jsonyenulang" },
            { title: "娇喘", value: "jsonjiaochuan" },
            { title: "芒果派", value: "jsonmangguopai" },
            { title: "媚颜", value: "jsonmeiyan" },
            { title: "风流", value: "jsonfengliu" },
            { title: "夜律", value: "jsonyelu" },
            { title: "玲珑", value: "jsonlinglong" },
            { title: "浴火", value: "jsonyuhuo" },
            { title: "翠鸟", value: "jsoncuiniao" },
            { title: "幸运星", value: "jsonxingyunxing" },
            { title: "她秀", value: "jsontaxiu" },
            { title: "招财猫", value: "jsonzhaocaimao" },
            { title: "双碟", value: "jsonshuangdie" },
            { title: "糖果", value: "jsontangguo" },
            { title: "么么哒", value: "jsonmemeda" },
            { title: "小性感", value: "jsonxiaoxinggan" },
            { title: "小喵宠", value: "jsonxiaomiaochong" },
            { title: "兔女郎", value: "jsontunulang" },
            { title: "睡美人", value: "jsonshuimeiren" },
            { title: "金呗", value: "jsonjinbei" },
            { title: "美夕", value: "jsonmeixi" },
            { title: "小妖", value: "jsonxiaoyao" },
            { title: "约直播", value: "jsonyuezhibo" },
            { title: "花仙子", value: "jsonhuaxianzi" },
            { title: "土豪", value: "jsontuhao" },
            { title: "红妆", value: "jsonhongzhuang" },
            { title: "妞妞", value: "jsonniuniu" },
            { title: "艳后", value: "jsonyanhou" },
            { title: "moon", value: "jsonmoon" },
            { title: "蓝猫", value: "jsonlanmao" },
            { title: "美人妆", value: "jsonmeirenzhuang" },
            { title: "入巷", value: "jsonruxiang" },
            { title: "持久男", value: "jsonchijiunan" },
            { title: "倾心", value: "jsonqingxin" },
            { title: "小精灵", value: "jsonxiaojingling" },
            { title: "偶遇", value: "jsonouyu" },
            { title: "灰灰", value: "jsonhuihui" },
            { title: "猫头鹰", value: "jsonmaotouying" },
            { title: "喜欢你", value: "jsonxihuanni" },
            { title: "夜纯", value: "jsonyechun" },
            { title: "杏播", value: "jsonxingbo" },
            { title: "名流", value: "jsonmingliu" },
            { title: "小辣椒", value: "jsonxiaolajiao" },
            { title: "蚊香社", value: "jsonwenxiangshe" },
            { title: "牵手", value: "jsonqianshou" },
            { title: "情趣", value: "jsonqingqu" }
          ]
        }
      ]
    }
  ]
};

function safeParseData(raw) {
  if (raw == null) {
    throw new Error("API返回空数据");
  }

  if (typeof raw === "string") {
    try {
      return JSON.parse(raw);
    } catch (e) {
      throw new Error("返回内容不是有效 JSON");
    }
  }

  if (typeof raw !== "object") {
    throw new Error("返回数据类型异常");
  }

  return raw;
}

function buildDetailLink(item, category) {
  return encodeURIComponent(JSON.stringify({
    category,
    title: item.title || "未命名",
    coverUrl: item.img || "",
    videoUrl: item.address || ""
  }));
}

async function getVideos(params = {}) {
  try {
    if (!params.category) {
      throw new Error("缺少必要参数: category");
    }

    const url = `http://api.maiyoux.com:81/mf/${params.category}.txt`;
    console.log("[视频获取] 请求URL:", url);

    const response = await Widget.http.get(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15",
        "Accept": "application/json, text/javascript, */*; q=0.01"
      },
      timeout: 10000
    });

    const data = safeParseData(response?.data);
    if (!Array.isArray(data.zhubo)) {
      throw new Error("无效的数据格式：缺少 zhubo 数组");
    }

    const videos = data.zhubo
      .filter(item => item && item.address && item.title)
      .map(item => {
        const detailLink = buildDetailLink(item, params.category);
        return {
          id: item.address,
          type: "link",
          title: String(item.title).trim(),
          description: params.category,
          coverUrl: item.img || "",
          link: detailLink,
          subTitle: "直播"
        };
      });

    if (videos.length === 0) {
      return [{
        id: "empty",
        type: "text",
        title: "没有可用数据",
        description: `分类 ${params.category} 当前为空`
      }];
    }

    return videos;
  } catch (error) {
    return [{
      id: "error",
      type: "text",
      title: "请求失败",
      description: String(error.message || error)
    }];
  }
}

async function loadDetail(link) {
  try {
    const item = JSON.parse(decodeURIComponent(link));
    if (!item.videoUrl) {
      throw new Error("缺少播放地址");
    }

    return [{
      id: item.videoUrl,
      type: "link",
      title: item.title || "未命名直播",
      description: item.category ? `分类：${item.category}` : "直播源",
      coverUrl: item.coverUrl || "",
      episodeItems: [{
        id: item.videoUrl,
        type: "url",
        title: item.title || "立即播放",
        videoUrl: item.videoUrl
      }]
    }];
  } catch (error) {
    return [{
      id: "detail_error",
      type: "text",
      title: "详情加载失败",
      description: String(error.message || error)
    }];
  }
}
