// 网站资料来自飞书多维表格的当前内容。
// 以后想增加歌手，只需复制一个对象并修改字段。
const singers = [
  {
    id: "chen-qi-zhen",
    number: "NO.001",
    image: "images/chen-qi-zhen.jpg",
    name: "陈绮贞",
    realName: "陈绮贞",
    alias: "Cheer Chen",
    activeYears: "1998年至今",
    roles: ["唱作人", "作词人", "作曲人"],
    genres: ["独立民谣", "流行", "摇滚"],
    songs: ["旅行的意义", "太聪明", "还是会寂寞"],
    albums: ["让我想一想", "华丽的冒险", "太阳"],
    milestone: "台湾独立音乐与华语唱作代表人物之一",
    bio: "以清澈声线、文学性歌词与吉他创作为特色的台湾唱作人。",
    relation: "出生于台北，长期在台湾创作与发行作品。",
    source: "https://zh.wikipedia.org/wiki/陳綺貞"
  },
  {
    id: "chen-shan-ni",
    number: "NO.002",
    image: "images/chen-shan-ni.jpg",
    name: "陈珊妮",
    realName: "陈珊妮",
    alias: "Sandee Chan",
    activeYears: "1994年至今",
    roles: ["唱作人", "作词人", "作曲人", "制作人"],
    genres: ["流行", "电子", "实验/另类"],
    songs: ["情歌", "你要去哪里", "教我如何做你的爱人"],
    albums: ["后来我们都哭了", "如果有一件事是重要的", "战神卡尔迪亚"],
    milestone: "金曲奖最佳国语女歌手、最佳专辑制作人等",
    bio: "台湾唱作人及制作人，持续探索流行、电子与实验音乐。",
    relation: "出生于菲律宾、成长并长期活跃于台湾乐坛。",
    source: "https://zh.wikipedia.org/wiki/陳珊妮"
  },
  {
    id: "an-pu",
    number: "NO.003",
    image: "images/an-pu.jpg",
    name: "安溥",
    realName: "焦安溥",
    alias: "张悬 / Deserts Chang",
    activeYears: "2001年至今",
    roles: ["唱作人", "作词人", "作曲人"],
    genres: ["独立民谣", "摇滚", "流行"],
    songs: ["宝贝", "喜欢", "玫瑰色的你"],
    albums: ["My Life Will...", "亲爱的…我还不知道", "炼云"],
    milestone: "以张悬与安溥两个阶段持续发表重要创作",
    bio: "台湾唱作人，作品关注个人经验、社会与公共议题。",
    relation: "出生于台北。",
    source: "https://zh.wikipedia.org/wiki/安溥"
  },
  {
    id: "wei-ru-xuan",
    number: "NO.004",
    name: "魏如萱",
    realName: "魏如萱",
    alias: "Waa Wei",
    activeYears: "2003年至今",
    roles: ["唱作人", "作词人", "作曲人", "乐团主唱"],
    genres: ["流行", "独立民谣", "实验/另类"],
    songs: ["你啊你啊", "末路狂花", "彼个所在"],
    albums: ["不允许哭泣的场合", "末路狂花", "藏着并不等于遗忘"],
    milestone: "金曲奖最佳国语女歌手",
    bio: "台湾唱作歌手，曾任自然卷主唱，个人作品风格多变。",
    relation: "出生于花莲。",
    source: "https://zh.wikipedia.org/wiki/魏如萱"
  },
  {
    id: "xu-jia-ying",
    number: "NO.005",
    name: "徐佳莹",
    realName: "徐佳莹",
    alias: "Lala Hsu",
    activeYears: "2008年至今",
    roles: ["唱作人", "作词人", "作曲人"],
    genres: ["流行"],
    songs: ["身骑白马", "失落沙洲", "言不由衷"],
    albums: ["LaLa首张创作专辑", "寻人启事", "心里学"],
    milestone: "金曲奖最佳国语女歌手、最佳国语专辑",
    bio: "台湾流行唱作人，以旋律创作与细腻演唱著称。",
    relation: "出生于台中。",
    source: "https://zh.wikipedia.org/wiki/徐佳瑩"
  },
  {
    id: "ai-yi-liang",
    number: "NO.006",
    name: "艾怡良",
    realName: "艾怡良",
    alias: "Eve Ai",
    activeYears: "2010年至今",
    roles: ["唱作人", "作词人", "作曲人"],
    genres: ["流行", "爵士/R&B"],
    songs: ["我们的总和", "Forever Young", "寂寞无害"],
    albums: ["说 艾怡良", "垂直活着，水平留恋着。", "偏偏我却都记得"],
    milestone: "金曲奖最佳国语女歌手、最佳作曲人",
    bio: "台湾唱作人，创作融合灵魂乐、R&B与流行。",
    relation: "出生于台北。",
    source: "https://zh.wikipedia.org/wiki/艾怡良"
  },
  {
    id: "zheng-yi-nong",
    number: "NO.007",
    name: "郑宜农",
    realName: "郑宜农",
    alias: "Enno Cheng",
    activeYears: "2007年至今",
    roles: ["唱作人", "作词人", "作曲人", "乐团主唱"],
    genres: ["独立民谣", "摇滚", "台语音乐"],
    songs: ["玉仔的心", "千千岁", "新世纪的女儿"],
    albums: ["海王星", "给天王星", "水逆"],
    milestone: "金曲奖台语相关奖项重要入围与获奖者",
    bio: "台湾独立唱作人，曾参与猛虎巧克力等乐团，近年深耕台语创作。",
    relation: "出生于宜兰。",
    source: "https://zh.wikipedia.org/wiki/鄭宜農"
  },
  {
    id: "9m88",
    number: "NO.008",
    name: "9m88",
    realName: "汤毓绮",
    alias: "Joanne Tang / 9m88",
    activeYears: "2016年至今",
    roles: ["唱作人", "作词人", "作曲人"],
    genres: ["爵士/R&B", "流行", "电子"],
    songs: ["九头身日奈", "Aim High", "最高品质静悄悄"],
    albums: ["平庸之上", "9m88 Radio", "Sent"],
    milestone: "台湾新生代爵士与R&B创作代表之一",
    bio: "台湾唱作人，融合爵士、R&B、流行与视觉艺术。",
    relation: "出生于台北。",
    source: "https://zh.wikipedia.org/wiki/9m88"
  },
  {
    id: "lei-guang-xia",
    number: "NO.009",
    name: "雷光夏",
    realName: "雷光夏",
    alias: "Summer Lei",
    activeYears: "1995年至今",
    roles: ["唱作人", "作词人", "作曲人", "制作人"],
    genres: ["独立民谣", "实验/另类"],
    songs: ["逝", "脸颊贴紧月球", "黑暗之光"],
    albums: ["我是雷光夏", "脸颊贴紧月球", "黑暗之光"],
    milestone: "金曲奖演奏与制作相关奖项得主",
    bio: "台湾唱作人与音乐制作人，作品具有诗意、电影感与实验气质。",
    relation: "出生于台北。",
    source: "https://zh.wikipedia.org/wiki/雷光夏"
  },
  {
    id: "huang-xiao-zhen",
    number: "NO.010",
    name: "黄小桢",
    realName: "黄小桢",
    alias: "Ze Hwang",
    activeYears: "1997年至今",
    roles: ["唱作人", "作词人", "作曲人"],
    genres: ["独立民谣", "实验/另类"],
    songs: ["December Night", "15秒练习曲", "泡水的后车厢"],
    albums: ["赏味期限", "No Budget", "黄小桢2"],
    milestone: "台湾独立唱作重要先行者",
    bio: "台湾独立唱作人，以低保真、生活化与双语创作著称。",
    relation: "出生于台湾，长期活跃于台湾独立音乐圈。",
    source: "https://zh.wikipedia.org/wiki/黃小楨"
  },
  {
    id: "wang-ruo-lin",
    number: "NO.011",
    name: "王若琳",
    realName: "王若琳",
    alias: "Joanna Wang",
    activeYears: "2008年至今",
    roles: ["唱作人", "作词人", "作曲人", "制作人"],
    genres: ["爵士/R&B", "流行", "实验/另类"],
    songs: ["迷宫", "有你的快乐", "我只在乎你"],
    albums: ["Start from Here", "银河的危机", "爱的呼唤"],
    milestone: "金曲奖最佳国语专辑等重要奖项",
    bio: "出生于台湾的唱作人与制作人，后期作品展现鲜明实验与复古趣味。",
    relation: "出生于台北，成长经历跨台湾与美国。",
    source: "https://zh.wikipedia.org/wiki/王若琳"
  },
  {
    id: "xu-zhe-pei",
    number: "NO.012",
    name: "许哲珮",
    realName: "许哲珮",
    alias: "Peggy Hsu",
    activeYears: "2001年至今",
    roles: ["唱作人", "作词人", "作曲人", "制作人"],
    genres: ["流行", "独立民谣", "实验/另类"],
    songs: ["气球", "疯子", "美好的"],
    albums: ["气球", "许愿盒", "奇幻精品店"],
    milestone: "多次入围金曲奖，并从事专辑制作与剧场音乐",
    bio: "台湾唱作人与制作人，作品具有童话、古典与实验色彩。",
    relation: "出生于台北。",
    source: "https://zh.wikipedia.org/wiki/許哲珮"
  },
  {
    id: "huang-yun-ling",
    number: "NO.013",
    name: "黄韵玲",
    realName: "黄韵玲",
    alias: "Kay Huang",
    activeYears: "1986年至今",
    roles: ["唱作人", "作词人", "作曲人", "制作人"],
    genres: ["流行"],
    songs: ["没有你的圣诞节", "关不掉的收音机", "三个人的晚餐"],
    albums: ["忧伤男孩", "蓝色啤酒海", "美好岁月"],
    milestone: "台湾流行音乐重要创作者、制作人与评审",
    bio: "台湾资深唱作人及制作人，对华语流行音乐创作与人才培育影响深远。",
    relation: "出生于宜兰。",
    source: "https://zh.wikipedia.org/wiki/黃韻玲"
  },
  {
    id: "chen-hui-ting",
    number: "NO.014",
    name: "陈惠婷",
    realName: "陈惠婷",
    alias: "Huiting Chen",
    activeYears: "1998年至今",
    roles: ["唱作人", "作词人", "作曲人", "乐团主唱"],
    genres: ["摇滚", "流行", "电子"],
    songs: ["信任", "时间的孤岛", "极光"],
    albums: ["21克", "成人世界", "Voyager 3"],
    milestone: "Tizzy Bac 主唱，台湾独立摇滚重要创作者",
    bio: "台湾唱作人及 Tizzy Bac 主唱，以键盘摇滚和文学性歌词著称。",
    relation: "出生于台湾，长期活跃于台湾独立音乐圈。",
    source: "https://zh.wikipedia.org/wiki/陳惠婷"
  }
];

const essentialAlbums = [
  {
    title: "忧伤男孩",
    artist: "黄韵玲",
    year: "1986",
    cover: "images/album-sad-boy.jpg",
    note: "女性创作者走向幕前，也重新定义了八十年代台湾流行音乐的青春语气。"
  },
  {
    title: "我是雷光夏",
    artist: "雷光夏",
    year: "1995",
    cover: "images/album-summer-lei.jpg",
    note: "像一本被唱出来的散文集，为城市民谣留下安静而深远的坐标。"
  },
  {
    title: "让我想一想",
    artist: "陈绮贞",
    year: "1998",
    cover: "images/album-let-me-think.jpg",
    note: "卧室、吉他与青春独白，成为台湾独立唱作的重要起点。"
  },
  {
    title: "My Life Will...",
    artist: "张悬",
    year: "2006",
    cover: "images/album-my-life-will.jpg",
    note: "以坦率的词句和克制的编曲，写出一代人的亲密与孤独。"
  },
  {
    title: "末路狂花",
    artist: "魏如萱",
    year: "2016",
    cover: "images/album-run-frantic-flowers.jpg",
    note: "女性经验、摇滚张力与戏剧性叙事在这里彼此碰撞。"
  },
  {
    title: "水逆",
    artist: "郑宜农",
    year: "2022",
    cover: "images/album-mercury-retrograde.jpg",
    note: "以台语面对当代生活，让身份、关系与语言重新流动。"
  }
];

const readingRoom = [
  {
    singer: "陈珊妮",
    type: "访谈",
    title: "最大公约数的荒谬世界，意志是最重要的事",
    site: "报导者",
    url: "https://www.twreporter.org/a/interview-sandee-chan",
    summary: "从创作意志、产业位置到时代感，阅读陈珊妮如何保持锋利而清醒的表达。"
  },
  {
    singer: "陈绮贞",
    type: "访谈",
    title: "不要当个平面的标签，要做个立体的人",
    site: "女人迷",
    url: "https://womany.net/read/article/11801",
    summary: "关于标签、成长与自我观看，陈绮贞把轻声说话变成一种坚定的姿态。"
  },
  {
    singer: "安溥",
    type: "访谈",
    title: "她是歌者，也是听众",
    site: "报导者",
    url: "https://www.twreporter.org/a/interview-anpu-concert-look-back",
    summary: "回看舞台、听众与自我之间的关系，安溥谈歌者如何也成为聆听的人。"
  },
  {
    singer: "郑宜农",
    type: "乐评",
    title: "郑宜农《水逆》：预示新台女歌的诞生？",
    site: "Blow 吹音乐",
    url: "https://blow.streetvoice.com/60124",
    summary: "以《水逆》为入口，观察台语创作、女性经验与新世代流行语汇的交会。"
  },
  {
    singer: "陈嫺静",
    type: "乐评",
    title: "不典型的嘻哈少女陈嫺静",
    site: "The Interview Asia",
    url: "https://theinterview.asia/column/%E5%A3%B0%E9%9F%B3%E8%AF%91%E8%A7%88/185375",
    summary: "从嘻哈、R&B 到个人叙事，阅读陈嫺静如何把柔软和锐利放在同一首歌里。"
  }
];

const musicTimeline = [
  {
    decade: "1980s",
    title: "唱作意识萌芽",
    text: "校园民歌之后，女性音乐人逐渐从演唱者走向词曲创作、编曲与制作现场。",
    image: "images/timeline-1980s.jpg",
    caption: "声音从幕后走到台前"
  },
  {
    decade: "1990s",
    title: "独立声音成形",
    text: "另类唱片厂牌与现场空间出现，更个人化的书写开始进入主流视野。",
    image: "images/timeline-1990s.jpg",
    caption: "卧室、吉他与个人书写"
  },
  {
    decade: "2000s",
    title: "乐团与唱作人的黄金交会",
    text: "独立乐团、网络传播与音乐祭共同扩张，女性创作者拥有更多发表路径。",
    image: "images/timeline-2000s.jpg",
    caption: "独立音乐进入新的公共空间"
  },
  {
    decade: "2010s",
    title: "语言与风格全面展开",
    text: "电子、R&B、实验音乐与母语创作交织，作品中的身份讨论更加鲜明。",
    image: "images/timeline-2010s.jpg",
    caption: "风格扩张与身份书写"
  },
  {
    decade: "2020s",
    title: "档案持续书写",
    text: "跨语言、跨媒介与自主制作成为日常，新一代创作者继续改变流行音乐的边界。",
    image: "images/timeline-2020s.jpg",
    caption: "未来仍在发生"
  }
];
