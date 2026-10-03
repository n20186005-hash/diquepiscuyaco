export type Locale = "zh" | "en" | "es" | "it";
export type LinkItem = { name: string; url: string };
export type FAQItem = { question: string; answer: string };
export type TransportOption = { name: string; time: string; price: string; steps: string[] };

export type Translations = {
  nav: { history: string; architecture: string; monuments: string; eco: string; visiting: string; transportation: string; gallery: string; reviews: string; faq: string; location: string };
  hero: { tags: string[]; tagline: string; title: string; subtitle: string; cta: string };
  rating: { reviews: string; source: string };
  history: { title: string; intro: string };
  myths: { title: string; intro: string; items: { title: string; content: string }[] };
  curiosities: { title: string; content: string };
  eco: { title: string; intro: string; items: string[] };
  architecture: { title: string; intro: string; specs: { structure: { title: string; content: string }; design: { title: string; content: string }; optics: { title: string; content: string } }; plaque: { title: string; items: { label: string; value: string }[] } };
  monuments: { title: string; intro: string; items: { name: string; description: string }[] };
  contrast: { title: string; intro: string; before: string; after: string };
  visiting: { title: string; intro: string; hours: { title: string; content: string; note: string }; price: { title: string; content: string; note: string }; duration: { title: string; content: string; note: string }; tips: { title: string; items: string[] } };
  transportation: { title: string; airport: { title: string; content: string; options: TransportOption[] }; publicTransport?: { title: string; content: string; options: { name: string; description: string; steps: string[] }[] }; cycling?: { title: string; content: string }; city: { title: string; content: string; steps: string[] }; tips: { title: string; items: string[] } };
  gallery: { title: string; viewMore: string };
  reviews: { title: string; subtitle: string; viewMore: string; nearbyTitle: string; nearbyIntro: string; nearbyItems: { name: string; description: string }[] };
  faq: { title: string; subtitle: string; items: FAQItem[] };
  location: { title: string; address: string; openMaps: string };
  footer: { callToAction: string; text: string; made: string; linksTitle: string; links: LinkItem[] };
  // Quick-access anchors on the first screen (mobile-first): Cómo llegar / Playas / Qué hacer / Mapa
  quicklinks: { reach: string; beaches: string; things: string; map: string };
  // "Datos útiles" fact sheet (Spanish homepage only) — highly snippet-friendly
  quickfacts?: { heading: string; items: { label: string; value: string }[] };
  // "Playas y agua" section (Spanish homepage only) — adds lago/playa/embalse semantics
  water?: { title: string; intro: string; items: { heading: string; body: string }[] };
};

const ARGENTINA_LINKS: LinkItem[] = [
  { name: "阿根廷国家旅游局 (Visit Argentina)", url: "https://www.argentina.travel" },
  { name: "圣路易斯省官方旅游局 (Turismo San Luis)", url: "https://turismo.sanluis.gob.ar" },
  { name: "梅洛镇官方旅游局 (Turismo Villa de Merlo)", url: "https://villademerlo.tur.ar" },
  { name: "阿根廷自然之路 (La Ruta Natural)", url: "https://larutanatural.gob.ar" },
  { name: "阿根廷国家旅游和体育部", url: "https://www.argentina.gob.ar/turismoydeportes" },
];

export const translations: Record<Locale, Translations> = {
  zh: {
    nav: { history: "文化与历史", architecture: "水库与地貌", monuments: "游玩体验", eco: "生态责任", visiting: "游览信息", transportation: "交通指南", gallery: "照片集锦", reviews: "游客评价", faq: "常见问题", location: "地图位置" },
    hero: { tags: ["距梅洛约 25 km", "生态水库", "免费开放"], tagline: "阿根廷 · 圣路易斯省", title: "Dique Piscu Yaco", subtitle: "皮斯库亚科水库 · 清澈碧水 · 科门钦戈内斯山脉", cta: "探索 Piscu Yaco" },
    rating: { reviews: "条评价", source: "Google 评论" },
    history: {
      title: "历史渊源与文化回音",
      intro: `皮斯库亚科水库（Dique Piscu Yaco）不仅是一项现代水利工程，更是一面倒映着圣路易斯悠久历史的水镜。它坐落于孔克拉山谷（Valle del Conlara），距科塔德拉（Cortaderas）约 6 公里，距著名的山间旅游小镇梅洛（Villa de Merlo）约 **25 公里**（车程多为 25–27 公里），距离圣路易斯省首府约 190 公里。\n\n**科门钦戈内斯人的古老回音**\n早在西班牙人抵达之前，这片群山便是科门钦戈内斯（Comechingones）原住民的家园。这是一个崇尚自然、以岩洞为居的民族。他们敬畏山脉与水源，将水视为大地母亲（Pachamama）的血液。今天，在前往水库的沿途山径中，依然隐藏着他们留下的岩画与石钵（Morteros）。\n\n**克丘亚语中的诗意命名**\n“Piscu Yaco”源自古老的克丘亚语（Quechua），意为“飞鸟的水坑”（Aguada de los Pájaros）。这个极具画面感的名字并非凭空而来，而是为了向圣路易斯最伟大的诗人安东尼奥·埃斯特万·阿圭罗（Antonio Esteban Agüero）致敬。在他的传世名作《老角豆树大合唱》（Cantata al Algarrobo Abuelo）中，山川、飞鸟与参天古树构成了圣路易斯的精神图腾。\n\n**现代生态水利的里程碑**\n皮斯库亚科于 **2010 年 12 月 20 日**正式落成，作为圣路易斯省第 15 个人工湖，也是科门钦戈内斯山脉中的第一座人工水库。总面积约 16.9 公顷的清澈水体，不仅有助于周边微气候调节与干旱期蓄水，也成为黑头鸭、苍鹭等水生鸟类的重要栖息地。`
    },
    myths: {
      title: "原住民传说与山脉神话",
      intro: "在科门钦戈内斯人的自然观里，山脉与水体并非无生命的景观，而是拥有呼吸与意志的存在。以下传说以诗意的方式，提醒人们以敬畏之心靠近这片“飞鸟的水坑”。",
      items: [
        {
          title: "水源的守护神：蛇与地下世界",
          content:
            "在干旱山地，每一处泉眼与水潭都被视为通向“地下世界”的神圣通道。传说中，清澈的水由巨大的灵蛇守护：蛇象征水的流动与大地的生命力。\n\n当人们来到水边取水或采集时，需要保持安静，并在水畔留下微小供品（植物、石块等），以感谢水灵的馈赠并祈求庇佑。\n\n这种把水源神圣化的信仰，与今天强调“保护水体、无痕游览”的生态理念在精神上形成了呼应。"
        },
        {
          title: "太阳、月亮与沉睡的巨人",
          content:
            "关于科门钦戈内斯山脉（Sierras de los Comechingones）的起源，原住民口中流传着浪漫而悲壮的创世叙事：远古的巨人为了保护山谷里的生灵免受狂风与恶劣气候侵袭，选择化作岩石，首尾相连，成为今日连绵的山脊。\n\n在这一体系里，山脉被视为大地母亲（Pachamama）隆起的脊梁，太阳（Inti）与月亮（Quilla）赋予它光与时间的节律。\n\n当晨光或夕阳洒在水库背后的花岗岩上，人们相信那是诸神在苏醒或安睡。"
        },
        {
          title: "飞鸟的信使：神鹰（Cóndor）",
          content:
            "“Piscu Yaco”得名于飞鸟，而在原住民的信仰中，鸟类尤其是安第斯神鹰（Cóndor）具有穿梭天地的能力。\n\n神鹰被视为连接人间与上天的使者：当部落中的智者或长者逝去，他们的灵魂会由神鹰托起，飞越孔克拉山谷，最终融入群山。\n\n今天，当你在湖畔观鸟，若偶遇高空盘旋的猛禽，也许正是这段古老想象在现实中的回声。"
        }
      ]
    },
    curiosities: {
      title: "命名与诗歌索引",
      content: `“Piscu Yaco”源自克丘亚语（Quechua），常被译为“飞鸟的水坑”（Aguada de los Pájaros），也有人解释为“清水”（agua clara）。两种译法共同指向一种对纯净水体与生命繁盛的珍视。\n\n这一命名也被普遍认为与圣路易斯诗人安东尼奥·埃斯特万·阿圭罗（Antonio Esteban Agüero）的诗歌意象相关：当混凝土的大坝以诗意的语言被命名，工程便获得了面向自然与公共记忆的另一层含义。`
    },
    eco: {
      title: "生态责任（Eco-Responsibility）",
      intro: "皮斯库亚科是一处公共水域与野生动物栖息地的交汇点。作为独立的非盈利科普指南，我们倡导以最低影响的方式亲近山水，让这片“飞鸟的水坑”得以长期维持其生态功能。",
      items: [
        "**无痕游览**：带走所有垃圾与可回收物，不遗留烟头、塑料或食物残渣",
        "**保护水体**：不在湖中或入湖岸边使用任何化学洗涤剂、香皂或清洁用品",
        "**尊重野生动物**：与鸟类保持距离，避免投喂与追逐，使用望远镜或长焦镜头观察",
        "**遵守指定区域**：野餐与露营仅在允许区域进行，避免踩踏植被与侵入敏感栖息地",
        "**降低噪声与光扰动**：减少外放音乐与强光照明，尤其在清晨与黄昏观鸟高峰时段"
      ]
    },
    architecture: {
      title: "水库本体与周边地貌",
      intro: "皮斯库亚科并非单纯的蓄水池，而是一处人工水体与原始山景巧妙融合的景观。大坝、泄水设施与环湖绿带共同构成了一座面向公众的生态休闲空间。",
      specs: {
        structure: { title: "工程结构", content: "作为圣路易斯省第 15 个'水面'、科门钦戈内斯山脉首座水库，其主体由拦水坝与泄水系统构成，水面面积约 16.9 公顷，连同周边汇水区总计约 21 公顷，兼具供水、调节与旅游功能。" },
        design: { title: "地貌形态", content: "水库镶嵌在孔克拉山谷的群山之间，四周是典型的圣路易斯山脉花岗岩丘陵与干旱林（以角豆树、恰尼亚尔灌木为主）。碧蓝水面与赭红山岩形成强烈对比，是摄影与写生的绝佳题材。" },
        optics: { title: "观景体验", content: "沿湖设有步行与休憩区域，游客可近距离亲水、远眺山脊轮廓。清晨与黄昏时分，水面如镜、山色温润，是欣赏'飞鸟的水坑'最动人的时刻。" }
      },
      plaque: {
        title: "景点基本信息",
        items: [
          { label: "名称", value: "Dique Piscu Yaco（皮斯库亚科水库）" },
          { label: "位置", value: "孔克拉山谷，科塔德拉，圣路易斯省，阿根廷" },
          { label: "落成时间", value: "2010 年 12 月 20 日" },
          { label: "水面面积", value: "约 16.9 公顷" },
          { label: "行政归属", value: "查卡布科县（Chacabuco）" },
          { label: "最近城镇", value: "梅洛镇约 25 公里" }
        ]
      }
    },
    monuments: {
      title: "在 Piscu Yaco 可以体验什么",
      intro: "这里既是亲水休闲的目的地，也是探索科门钦戈内斯山脉的起点。以下活动深受家庭、情侣与户外爱好者的喜爱。",
      items: [
        { name: "皮划艇与划船", description: "平静的湖面是练习皮划艇、独木舟与休闲划船的理想场所。无动力小船能让你以最安静的方式贴近水面、观赏水鸟。" },
        { name: "休闲垂钓", description: "水库放养有常见淡水鱼种，吸引众多钓鱼爱好者前来。请遵守当地关于渔具与捕捞量的规定，践行'钓获即放流'的可持续理念。" },
        { name: "徒步与观鸟", description: "环湖及周边的丘陵步道适合轻徒步。带上望远镜，您可能邂逅苍鹭、野鸭等多种水鸟——这正是'飞鸟的水坑'得名的缘由。" },
        { name: "湖畔野餐与露营", description: "指定的野餐与露营区让家庭游客得以在山水之间放松。日落时分支起帐篷，听山风与水声入眠，是难忘的体验。" }
      ]
    },
    contrast: {
      title: "山水之间",
      intro: "皮斯库亚科的魅力，在于人工水体与原始山景的彼此成就。一面是澄澈如镜的碧水，一面是亘古沉默的群山——以下两幅画面，带您感受这份静谧的平衡。",
      before: "澄澈的水镜",
      after: "环抱的山脉"
    },
    visiting: {
      title: "实用游览指南",
      intro: "皮斯库亚科是一座面向公众开放的山地水库，适合安排半日或一日的亲水休闲行程。以下信息可帮助您更从容地规划。",
      hours: { title: "开放与可达", content: "水库公共区域常年对公众开放，建议白天前往以便亲水与徒步。", note: "无门禁时段限制，但夜间照明有限，建议于日落前离开湖畔。" },
      price: { title: "门票信息", content: "公共湖畔区域**免费开放**，不收取门票。", note: "部分租赁项目（如船只、露营设施）可能由现场经营者单独收费，请以现场为准。" },
      duration: { title: "建议游览时长", content: "轻松环湖 + 野餐：约 2–3 小时。\n深度徒步 + 观鸟 + 露营：可安排一整天。", note: "与附近的梅洛镇、洛斯莫列斯（Los Molles）串联，可规划 1–2 日山地之旅。" },
      tips: { title: "游览贴士与注意事项", items: [
        "**防晒与补水**：圣路易斯高原日照强烈、气候干燥，请涂抹防晒、佩戴帽子并携带充足饮用水",
        "山区昼夜温差较大，建议备一件薄外套",
        "穿着舒适防滑的步行鞋，部分土路在雨后湿滑",
        "**观鸟礼仪**：保持安静、勿靠近鸟巢，用长焦镜头代替靠近",
        "**无痕山林**：带走所有垃圾，不在水体中使用化学洗涤剂，保护“飞鸟的水坑”",
        "驾驶前往时，最后约 2 公里为通往山中的柏油路，雨季请留意路况"
      ] }
    },
    transportation: {
      title: "精准交通指南",
      airport: { title: "从圣路易斯首府 / 机场出发", content: "最近的机场位于圣路易斯省首府（距水库约 190 公里），亦可经科尔多瓦（Córdoba）中转。抵达后建议自驾或包车前往。", options: [
        { name: "自驾 / 包车（推荐）", price: "约 2–2.5 小时车程", time: "190 公里", steps: ["从圣路易斯首府沿通往梅洛方向的主干道北上", "进入孔克拉山谷后，循'Dique Piscu Yaco'路牌", "在省道 1 号（RP-1）约 25.5 公里处转入通往山中的支线，再行驶约 2 公里即达"] }
      ]},
      publicTransport: {
        title: "公共交通",
        content: "从梅洛镇可搭乘前往科塔德拉方向的小巴或拼车，在水库附近下车后步行进入。",
        options: [
          {
            name: "小巴 / 拼车 (Merlo → Cortaderas)",
            description: "从梅洛镇汽车站乘坐前往科塔德拉方向的小巴，告知司机在 Piscu Yaco 路口下车。",
            steps: [
              "在梅洛镇搭乘前往 Cortaderas 方向的小巴",
              "于水库支线入口处下车",
              "步行约 2 公里（或换乘当地短驳）进入湖区"
            ]
          }
        ]
      },
      city: { title: "从梅洛镇（Villa de Merlo）出发", content: "梅洛镇距水库约 **25 公里**，是大多数游客的落脚地。自驾约 20–30 分钟，沿途穿过孔克拉山谷的典型山景。", steps: ["从梅洛镇向南驶入 RP-1", "行驶约 25.5 公里后在支线转向山中", "再行驶约 2 公里柏油路抵达湖畔停车场"] },
      tips: { title: "交通与海拔小贴士", items: [
        "**海拔与体感**：水库地处约 1,000 米上下的山谷，气候比高海拔地区温润，体感舒适",
        "梅洛镇住宿与餐饮选择丰富，适合作为基地",
        "山区手机信号不稳定，建议提前下载离线地图",
        "可与梅洛镇、洛斯莫列斯安排在同一行程",
        "周末与节假日车位紧张，建议早到"
      ] }
    },
    reviews: {
      title: "游客评价与周边探索",
      subtitle: "来自皮斯库亚科的声音：Google Maps 真实见证",
      viewMore: "在 Google Maps 查看更多评价",
      nearbyTitle: "周边值得一游的景点",
      nearbyIntro: "游览完皮斯库亚科后，您可顺道探索以下邻近目的地：",
      nearbyItems: [
        { name: "梅洛镇（Villa de Merlo）", description: "圣路易斯省最负盛名的山间旅游小镇，以宜人气候、手工艺市集与“长寿之地”闻名，距水库约 25 公里。" },
        { name: "科门钦戈内斯山脉（Sierras de los Comechingones）", description: "横亘圣路易斯与科尔多瓦两省的山脉，遍布徒步路线、瀑布与原住民文化遗迹，是户外爱好者的天堂。" },
        { name: "洛斯莫列斯（Los Molles）", description: "另一座恬静的山谷小镇，以温泉、自然步道与观星条件著称，与皮斯库亚科同属孔克拉旅游走廊。" }
      ]
    },
    gallery: { title: "照片集锦", viewMore: "在 Google Maps 查看更多相片" },
    faq: { title: "常见问题", subtitle: "深入了解皮斯库亚科", items: [
      { question: "皮斯库亚科水库的名字是什么意思？", answer: "“Piscu Yaco” 源自克丘亚语：“piscu” 意为飞鸟，“yaco / yaku” 意为水，合起来即“飞鸟的水坑”（Aguada de los Pájaros），也常被解释为“清水”。这一名称致敬了圣路易斯诗人安东尼奥·埃斯特万·阿圭罗的作品《老角豆树大合唱》。" },
      { question: "水库需要门票吗？开放时间是怎样的？", answer: "公共湖畔区域常年免费开放，不收取门票。建议白天、日落前前往与离开；夜间照明有限。部分船只或露营设施的租赁可能由现场经营者单独收费。" },
      { question: "在皮斯库亚科可以玩什么？", answer: "您可以体验皮划艇与休闲划船、休闲垂钓、环湖轻徒步与观鸟，以及在指定区域野餐与露营。平静的水面与环抱的山脉，使其非常适合家庭与户外爱好者。" },
      { question: "从梅洛镇怎么去？需要多久？", answer: "梅洛镇距水库约 **25 公里**。自驾沿 RP-1 **向南**行驶，在约 25.5 公里处转入山中支线再行驶约 2 公里即达，车程约 20–30 分钟。也可搭乘前往科塔德拉方向的小巴在路口下车后步行。" },
      { question: "参观时有什么注意事项？", answer: "高原日照强烈、气候干燥，请注意防晒与补水；山区昼夜温差大。请保持安静观鸟、带走所有垃圾、不在水体中使用化学洗涤剂，共同守护这片“飞鸟的水坑”。" }
    ]},
    location: { title: "地图位置", address: "C2XV+QM\nCortaderas\nSan Luis\nArgentina（阿根廷 圣路易斯省）", openMaps: "在 Google Maps 查看位置" },
    footer: { callToAction: "作为圣路易斯山间珍贵的公共水体，请与我们一起爱护环境、保护这片“飞鸟的水坑”。保持景区整洁，让更多人得以共享这份山水之美。", text: "© 2026 皮斯库亚科水库指南 · 保留所有权利。\n本网站是一个独立的第三方科普指南项目，致力于准确传播 Dique Piscu Yaco 的信息。我们与阿根廷政府或任何官方机构均无隶属关系。", made: "本网站是一个独立的非盈利科普项目，为探索者与学习者而建。", linksTitle: "友情链接", links: ARGENTINA_LINKS, quicklinks: { reach: "怎么去", beaches: "海滩", things: "玩什么", map: "地图" } }
  },
  en: {
    nav: { history: "Culture & History", architecture: "The Reservoir", monuments: "Activities", eco: "Eco Responsibility", visiting: "Visit Info", transportation: "Transportation", gallery: "Gallery", reviews: "Reviews", faq: "FAQ", location: "Location" },
    hero: { tags: ["~25 km from Merlo", "Eco Reservoir", "Free Entry"], tagline: "Argentina · San Luis", title: "Dique Piscu Yaco", subtitle: "Piscu Yaco Reservoir · Crystal-clear Waters · Comechingones Sierras", cta: "Explore Piscu Yaco" },
    rating: { reviews: "reviews", source: "Google Reviews" },
    history: {
      title: "History & Origins",
      intro: "Dique Piscu Yaco is more than a piece of modern infrastructure: it is a water mirror reflecting the long history of San Luis. It sits in the Conlara Valley (Valle del Conlara), about 6 km from Cortaderas and roughly **25 km** from the mountain town of Villa de Merlo (typically 25–27 km by road), around 190 km from the provincial capital.\n\n**Echoes of the Comechingones**\nLong before the Spanish arrived, these sierras were home to the Comechingones people. Their worldview treated mountains and water as living presences, and water as the blood of Mother Earth (Pachamama). Even today, rock art and stone mortars (morteros) can still be found along nearby trails.\n\n**A Quechua name with poetic weight**\n‘Piscu Yaco’ comes from Quechua and is commonly rendered as ‘the birds’ watering place’ (Aguada de los Pájaros). The name is also widely linked to the imagery of San Luis poet Antonio Esteban Agüero, whose ‘Cantata al Algarrobo Abuelo’ turned birds, mountains and old carob trees into a spiritual emblem of the region.\n\n**A milestone in eco‑oriented waterworks**\nThe reservoir was inaugurated on **20 December 2010**. It is the 15th ‘water mirror’ (espejo de agua) in San Luis and the first reservoir built in the Sierras de los Comechingones. Its clear waters (about 16.9 hectares) support climate regulation and dry‑season storage, and provide habitat for waterbirds such as ducks and herons."
    },
    myths: {
      title: "Indigenous Legends of the Sierras",
      intro: "In Comechingones cosmology, mountains and water are not inert scenery but living forces. These stories offer a way to approach Piscu Yaco with respect.",
      items: [
        {
          title: "Guardians of the Springs: The Serpent Below",
          content:
            "In a dry mountain landscape, springs and pools were treated as sacred passages to an underworld of spirits. A great serpent was said to guard the clear water — a symbol of flow and the life of the earth.\n\nVisitors would keep quiet and leave small offerings by the shore, expressing gratitude and asking for protection.\n\nThe underlying ethic resonates with modern conservation: protect the water body and visit with minimal impact."
        },
        {
          title: "Sun, Moon, and the Sleeping Giants",
          content:
            "One origin tale says that ancient giants chose to become rock in order to shield the valley’s beings from harsh winds and storms, forming the ridge‑lines seen today.\n\nWithin this worldview, the sierras are the raised backbone of Pachamama, while the Sun (Inti) and Moon (Quilla) give them rhythm and light.\n\nWhen dawn or dusk colours the granite behind the reservoir, it is imagined as the moment the gods awaken or rest."
        },
        {
          title: "Bird Messengers: The Condor (Cóndor)",
          content:
            "Piscu Yaco is named for birds, and birds — especially the Andean condor — are revered as messengers between earth and sky.\n\nIt is said that when elders pass, a condor carries their spirit across the Conlara Valley until it becomes part of the mountains.\n\nToday, spotting a large raptor circling above the lake can feel like a living echo of that ancient imagination."
        }
      ]
    },
    curiosities: {
      title: "Naming Notes & Literary Context",
      content:
        "‘Piscu Yaco’ is commonly translated from Quechua as ‘the birds’ watering place’ (Aguada de los Pájaros), and is sometimes interpreted as ‘clear water’ (agua clara). Both readings point to the same appreciation of clean water and thriving life.\n\nThe name is also widely associated with San Luis poet Antonio Esteban Agüero, whose imagery in ‘Cantata al Algarrobo Abuelo’ ties birds, mountains and old carob trees to regional identity."
    },
    eco: {
      title: "Eco Responsibility",
      intro: "Piscu Yaco is a meeting point between a public water body and wildlife habitat. As an independent non‑profit educational guide, we encourage low‑impact visits so the site can keep functioning as an ecosystem.",
      items: [
        "**Leave no trace**: take all rubbish and recyclables with you, including cigarette butts and food scraps",
        "**Protect the water**: avoid soaps, detergents or any chemicals in or near the lake",
        "**Respect wildlife**: keep distance from birds, do not feed them, and use binoculars or zoom lenses",
        "**Stay in designated areas**: picnic and camp only where permitted to avoid trampling sensitive habitat",
        "**Reduce noise and light**: avoid loud music and strong lights, especially at dawn and dusk"
      ]
    },
    architecture: {
      title: "The Reservoir & Surrounding Landscape",
      intro: "Piscu Yaco is more than a storage basin — it is a landscape where a human-made lake meets raw mountain scenery. The dam, spillways and lakeside green belt together form a public eco-recreation space.",
      specs: {
        structure: { title: "Engineering Structure", content: "As the 15th 'water mirror' of San Luis and the first reservoir in the Comechingones range, its main body consists of an embankment dam and spillway system. The water surface covers about 16.9 hectares, with the wider catchment around 21 hectares, serving supply, regulation and tourism." },
        design: { title: "Landform", content: "Set among the hills of the Conlara Valley, the reservoir is framed by typical San Luis granite sierras and dry woodland (carob, chañar shrubs). The blue water against red-ochre rock makes it a favourite for photography and sketching." },
        optics: { title: "Viewing Experience", content: "Walking and rest areas line the shore, letting visitors get close to the water and gaze at the ridgelines. At sunrise and sunset the lake turns mirror-still and the hills glow warm — the most moving time to see the 'birds' watering place'." }
      },
      plaque: {
        title: "Basic Information",
        items: [
          { label: "Name", value: "Dique Piscu Yaco" },
          { label: "Location", value: "Conlara Valley, Cortaderas, San Luis, Argentina" },
          { label: "Inaugurated", value: "20 December 2010" },
          { label: "Surface Area", value: "about 16.9 hectares" },
          { label: "District", value: "Chacabuco" },
          { label: "Nearest Town", value: "Villa de Merlo (~25 km)" }
        ]
      }
    },
    monuments: {
      title: "What to Do at Piscu Yaco",
      intro: "It is both a waterside retreat and a gateway to the Comechingones Sierras. The activities below are beloved by families, couples and outdoor enthusiasts.",
      items: [
        { name: "Kayaking & Rowing", description: "The calm surface is ideal for kayaks, canoes and leisure rowing. Non-motorised boats let you approach the water quietly and watch the birds." },
        { name: "Recreational Fishing", description: "Common freshwater species are stocked, drawing many anglers. Please follow local rules on gear and catch limits and practise catch-and-release." },
        { name: "Hiking & Birdwatching", description: "Easy lakeside and hillside trails suit light hiking. Bring binoculars — you may spot herons, ducks and more, which is exactly why it is called the 'birds' watering place'." },
        { name: "Lakeside Picnic & Camping", description: "Designated picnic and camping areas let families relax between mountain and water. Waking to mountain wind and water at sunset is unforgettable." }
      ]
    },
    contrast: {
      title: "Between Mountain & Water",
      intro: "The charm of Piscu Yaco lies in how the made lake and the wild hills complete each other. On one side, a mirror-still lake; on the other, ancient silent sierras — two views below capture this quiet balance.",
      before: "The Mirror of Water",
      after: "The Embracing Sierras"
    },
    visiting: {
      title: "Plan Your Visit",
      intro: "Piscu Yaco is a public mountain reservoir, perfect for a half-day or full-day waterside outing. The following helps you plan with ease.",
      hours: { title: "Access", content: "The public lakeside area is open to the public year-round. Daytime visits are recommended for water activities and hiking.", note: "No gated hours, but night lighting is limited — plan to leave the shore before sunset." },
      price: { title: "Entrance", content: "The public lakeside area is **free to enter**; no ticket is charged.", note: "Some rentals (boats, camping gear) may be charged by on-site operators — confirm locally." },
      duration: { title: "Suggested Duration", content: "Easy lakeside loop + picnic: about 2–3 hours.\nHiking + birdwatching + camping: a full day.", note: "Combine with nearby Villa de Merlo or Los Molles for a 1–2 day mountain trip." },
      tips: { title: "Travel Tips & Notes", items: [
        "**Sun & Hydration**: the San Luis highlands are sunny and dry — use sunscreen, wear a hat and carry water",
        "Large day–night temperature swings; bring a light jacket",
        "Wear comfortable non-slip shoes; some dirt paths get slippery after rain",
        "**Birding etiquette**: stay quiet, don't approach nests, use a zoom lens instead of getting close",
        "**Leave No Trace**: take all rubbish, avoid chemicals in the water, protect the 'birds' watering place'",
        "The final ~2 km to the lake is paved mountain road; check conditions in the rainy season"
      ] }
    },
    transportation: {
      title: "Precise Transportation Guide",
      airport: { title: "From San Luis Capital / Airport", content: "The nearest airport is at the San Luis provincial capital (~190 km away); Córdoba is an alternative gateway. From there, self-drive or a hired car is recommended.", options: [
        { name: "Self-drive / Hire Car (Recommended)", price: "about 2–2.5 hr drive", time: "190 km", steps: ["Head north from the capital on the Merlo-bound road", "In the Conlara Valley follow 'Dique Piscu Yaco' signs", "At Provincial Route 1 (RP-1) km 25.5 turn onto the mountain spur, then ~2 km to the lake"] }
      ]},
      publicTransport: {
        title: "Public Transport",
        content: "From Villa de Merlo you can take a minibus or shared ride toward Cortaderas and walk in near the reservoir.",
        options: [
          {
            name: "Minibus / Shared Ride (Merlo → Cortaderas)",
            description: "Take a Cortaderas-bound minibus from Merlo's terminal and ask to stop at the Piscu Yaco junction.",
            steps: [
              "Catch a Cortaderas-bound minibus in Villa de Merlo",
              "Alight at the reservoir access road",
              "Walk ~2 km (or use a local transfer) to the lake"
            ]
          }
        ]
      },
      city: { title: "From Villa de Merlo", content: "Merlo is about **25 km** away and is most visitors' base. Driving takes about 20–30 minutes through classic Conlara Valley scenery.", steps: ["From Merlo head south on RP-1", "At ~km 25.5 turn onto the mountain spur", "Drive ~2 km of paved road to the lakeside parking"] },
      tips: { title: "Transport & Altitude Tips", items: [
        "**Comfortable altitude**: the reservoir sits in a valley around ~1,000 m — milder and pleasant compared with high Andes",
        "Merlo has rich lodging and dining — a good base",
        "Mobile signal is patchy in the hills; download offline maps",
        "Combine with Merlo and Los Molles in one trip",
        "Weekends and holidays fill the car park — arrive early"
      ] }
    },
    reviews: {
      title: "Visitor Reviews & Nearby Exploration",
      subtitle: "Voices from Piscu Yaco: Real Testimonies from Google Maps",
      viewMore: "View More Reviews on Google Maps",
      nearbyTitle: "Nearby Attractions Worth Visiting",
      nearbyIntro: "After visiting Piscu Yaco, you can easily explore the following nearby destinations:",
      nearbyItems: [
        { name: "Villa de Merlo", description: "San Luis's best-known mountain town, famous for its mild climate, craft markets and 'land of longevity' — about ~25 km from the reservoir." },
        { name: "Sierras de los Comechingones", description: "A mountain range spanning San Luis and Córdoba, full of trails, waterfalls and indigenous heritage — a paradise for outdoor lovers." },
        { name: "Los Molles", description: "Another tranquil valley town known for hot springs, nature trails and stargazing, part of the Conlara tourism corridor alongside Piscu Yaco." }
      ]
    },
    gallery: { title: "Photo Gallery", viewMore: "View More Photos on Google Maps" },
    faq: { title: "Frequently Asked Questions", subtitle: "Learn More About Piscu Yaco", items: [
      { question: "What does 'Piscu Yaco' mean?", answer: "‘Piscu Yaco’ comes from Quechua: ‘piscu’ means bird and ‘yaco / yaku’ means water — together ‘the birds’ watering place’ (Aguada de los Pájaros), sometimes read as ‘clear water’. The name honours San Luis poet Antonio Esteban Agüero and his ‘Cantata to the Old Carob Tree’." },
      { question: "Is there an entrance fee or fixed opening hours?", answer: "The public lakeside area is free and open year-round, with no ticket. Daytime visits are best; night lighting is limited. Some boat or camping rentals may be charged by on-site operators." },
      { question: "What can I do at Piscu Yaco?", answer: "You can kayak and row, recreational fish, enjoy easy lakeside hiking and birdwatching, and picnic or camp in designated areas. The calm water and encircling hills suit families and outdoor lovers alike." },
      { question: "How do I get there from Villa de Merlo, and how long?", answer: "Merlo is about **25 km** away. Drive **south** on RP-1, turn onto the mountain spur at ~km 25.5 and continue ~2 km — about 20–30 minutes. A Cortaderas-bound minibus also stops at the access road." },
      { question: "What should I keep in mind when visiting?", answer: "The highlands are sunny and dry — protect yourself from the sun and drink water; temperatures swing day to night. Stay quiet for birding, take all rubbish, and avoid chemicals in the water to help protect this ‘birds’ watering place’." }
    ]},
    location: { title: "Map Location", address: "C2XV+QM\nCortaderas\nSan Luis\nArgentina", openMaps: "View Location on Google Maps" },
    footer: { callToAction: "As a precious public water body in the San Luis mountains, please join us in caring for the environment and protecting this 'birds' watering place'. Keep it clean so more people can share its beauty.", text: "© 2026 Dique Piscu Yaco Guide · All rights reserved.\nThis website is an independent third-party educational guide dedicated to sharing accurate information about Dique Piscu Yaco. We are not affiliated with the Argentine government or any official authority.", made: "This is an independent non-profit educational project, made for explorers and learners.", linksTitle: "Friendly Links", links: ARGENTINA_LINKS, quicklinks: { reach: "How to get there", beaches: "Beaches", things: "What to do", map: "Map" } }
  },
  es: {
    nav: { history: "Cultura e Historia", architecture: "El Embalse", monuments: "Actividades", eco: "Responsabilidad Ecológica", visiting: "Información", transportation: "Transporte", gallery: "Galería", reviews: "Reseñas", faq: "FAQ", location: "Ubicación" },
    hero: { tags: ["Cortaderas, San Luis", "~25 km de Merlo", "Playas y kayak", "Entrada gratuita"], tagline: "Argentina · San Luis", title: "Dique Piscu Yaco: naturaleza y playas en Cortaderas, San Luis", subtitle: "Dique, lago y balneario en Cortaderas, cerca de Villa de Merlo", cta: "Explorar Piscu Yaco" },
    rating: { reviews: "reseñas", source: "Google Reseñas" },
    history: {
      title: "Historia y Orígenes",
      intro: "El Dique Piscu Yaco es más que una obra moderna: es un espejo de agua que refleja la historia sanluiseña. Está en el Valle del Conlara, a unos 6 km de Cortaderas y aproximadamente **25 km** de Villa de Merlo (por ruta suele ser 25–27 km), y a 190 km de la capital provincial.\n\n**Eco antiguo de los Comechingones**\nAntes de la llegada española, estas sierras fueron hogar del pueblo Comechingones. Su mirada entendía a la montaña y al agua como entidades vivas, y al agua como la sangre de la Pachamama. Aún hoy pueden encontrarse arte rupestre y morteros de piedra en senderos cercanos.\n\n**Un nombre quechua con peso poético**\n‘Piscu Yaco’ proviene del quechua y suele traducirse como ‘la aguada de los pájaros’ (Aguada de los Pájaros). El nombre también se asocia a la imaginería del poeta Antonio Esteban Agüero y su ‘Cantata al Algarrobo Abuelo’, donde aves, sierras y algarrobos se vuelven símbolos de identidad.\n\n**Hito de hidrología con mirada ecológica**\nEl embalse fue inaugurado el **20 de diciembre de 2010**. Es el 15.º ‘espejo de agua’ de San Luis y el primer dique construido en las Sierras de los Comechingones. Sus aguas (unas 16,9 hectáreas) contribuyen a la regulación y al almacenamiento en época seca, y dan refugio a aves acuáticas."
    },
    myths: {
      title: "Leyendas Indígenas de la Sierra",
      intro: "En la cosmovisión comechingona, el agua y la montaña no son paisaje inerte sino fuerzas vivas. Estas historias invitan a acercarse a Piscu Yaco con respeto.",
      items: [
        {
          title: "Guardianes del Agua: la Serpiente",
          content:
            "En un territorio seco, manantiales y pozas se consideraban pasajes sagrados hacia un mundo subterráneo de espíritus. Una gran serpiente guardaba el agua clara, símbolo del fluir y de la vida de la tierra.\n\nAl acercarse al agua, se pedía silencio y se dejaban pequeñas ofrendas, como gesto de gratitud y protección.\n\nEsa ética resuena hoy en la idea de cuidar el agua y visitar sin dejar rastro."
        },
        {
          title: "Sol, Luna y Gigantes Dormidos",
          content:
            "Un relato de origen dice que gigantes antiguos eligieron volverse roca para proteger a los seres del valle del viento y el clima hostil, formando las crestas actuales.\n\nEn esta mirada, la sierra es la espalda elevada de la Pachamama, y el Sol (Inti) y la Luna (Quilla) le dan ritmo y luz.\n\nCuando el amanecer o el atardecer tiñe el granito detrás del dique, se imagina como el momento en que los dioses despiertan o descansan."
        },
        {
          title: "Mensajeros del Cielo: el Cóndor",
          content:
            "Piscu Yaco lleva un nombre ligado a las aves, y en la tradición indígena el cóndor es un mensajero entre la tierra y el cielo.\n\nSe dice que cuando mueren los mayores, un cóndor eleva su espíritu sobre el Valle del Conlara hasta fundirlo con la montaña.\n\nHoy, ver un gran rapaz girando sobre el lago puede sentirse como un eco vivo de esa imaginación antigua."
        }
      ]
    },
    curiosities: {
      title: "Notas del Nombre y Contexto Literario",
      content:
        "‘Piscu Yaco’ suele traducirse del quechua como ‘la aguada de los pájaros’ (Aguada de los Pájaros), y a veces se interpreta como ‘agua clara’ (agua clara). Ambas lecturas apuntan al valor del agua limpia y la vida silvestre.\n\nEl nombre también se vincula a la imaginería del poeta sanluiseño Antonio Esteban Agüero, en cuya ‘Cantata al Algarrobo Abuelo’ las aves y las sierras forman parte de un símbolo regional."
    },
    eco: {
      title: "Responsabilidad Ecológica",
      intro: "Piscu Yaco es un cuerpo de agua público y un hábitat de fauna. Como guía educativa independiente sin fines de lucro, promovemos una visita de bajo impacto para preservar este ecosistema.",
      items: [
        "**No deje rastro**: lleve consigo toda la basura, colillas y restos de comida",
        "**Proteja el agua**: evite jabones, detergentes o químicos en o cerca del lago",
        "**Respete la fauna**: mantenga distancia con las aves, no las alimente, use binoculares o zoom",
        "**Use áreas habilitadas**: picnic y acampe solo donde esté permitido para no dañar el hábitat",
        "**Reduzca ruido y luz**: evite música fuerte y luces intensas, sobre todo al amanecer y atardecer"
      ]
    },
    architecture: {
      title: "El Embalse y el Paisaje Circundante",
      intro: "Piscu Yaco no es solo una represa: es un paisaje donde un lago artificial se funde con la montaña virgen. El dique, los vertederos y la faja verde costera conforman un espacio público de ecoturismo.",
      specs: {
        structure: { title: "Estructura de Ingeniería", content: "Como decimoquinto 'espejo de agua' de San Luis y primer embalse de los Comechingones, su cuerpo principal consta de una represa de tierra y un sistema de vertedero. La superficie del espejo alcanza unas 16,9 hectáreas, con unas 21 hectáreas considerando la cuenca, sirviendo para abastecimiento, regulación y turismo." },
        design: { title: "Forma del Terreno", content: "Ubicado entre las sierras del Valle del Conlara, el dique está enmarcado por granitos típicos de San Luis y bosque seco (algarrobos, chañares). El agua azul contra la roca ocre-rojiza lo vuelve ideal para la fotografía y el boceto." },
        optics: { title: "Experiencia de Mirada", content: "Senderos y áreas de descanso bordean la costa, permitiendo acercarse al agua y contemplar las cumbres. Al amanecer y al atardecer el lago queda en calma y las sierras se tiñen de cálido: el momento más conmovedor para ver la 'aguada de los pájaros'." }
      },
      plaque: {
        title: "Información Básica",
        items: [
          { label: "Nombre", value: "Dique Piscu Yaco" },
          { label: "Ubicación", value: "Valle del Conlara, Cortaderas, San Luis, Argentina" },
          { label: "Inaugurado", value: "20 de diciembre de 2010" },
          { label: "Superficie", value: "unas 16,9 hectáreas" },
          { label: "Departamento", value: "Chacabuco" },
          { label: "Localidad más cercana", value: "Villa de Merlo (~25 km)" }
        ]
      }
    },
    monuments: {
      title: "Qué Hacer en Piscu Yaco",
      intro: "Es a la vez un retiro a orillas del agua y la puerta a las Sierras de los Comechingones. Las actividades siguientes encantan a familias, parejas y amantes del aire libre.",
      items: [
        { name: "Kayak y Remo", description: "La superficie tranquila es ideal para kayaks, canoas y remo de recreo. Las embarcaciones sin motor permiten acercarse al agua en silencio y observar las aves." },
        { name: "Pesca Deportiva", description: "Se encuentran especies de agua dulce que atraen a muchos pescadores. Respete las normas locales sobre artes y captura, y practique la pesca y suelta." },
        { name: "Senderismo y Avistamiento", description: "Los senderos costeros y de las lomas son aptos para caminatas livianas. Con binoculares podrá ver garzas, patos y más — justo lo que da nombre a la 'aguada de los pájaros'." },
        { name: "Picnic y Acampe", description: "Las áreas habilitadas permiten a las familias relajarse entre montaña y agua. Despertar al viento de la sierra y al son del agua al atardecer es inolvidable." }
      ]
    },
    contrast: {
      title: "Entre Montaña y Agua",
      intro: "El encanto de Piscu Yaco está en cómo el lago hecho por el hombre y las sierras salvajes se completan. De un lado, un espejo de agua en calma; del otro, sierras antiguas y silentes — dos vistas capturan este equilibrio sereno.",
      before: "El Espejo de Agua",
      after: "Las Sierras que lo Abrazan"
    },
    visiting: {
      title: "Planifica Tu Visita",
      intro: "Piscu Yaco es un embalse público de montaña, perfecto para una salida de medio día o día completo. Lo siguiente ayuda a planificar con tranquilidad.",
      hours: { title: "Acceso", content: "El área pública costera permanece abierta todo el año. Se recomienda visitar de día para las actividades acuáticas y el senderismo.", note: "Sin horario de cierre, pero la iluminación nocturna es limitada: conviene retirarse de la costa antes del atardecer." },
      price: { title: "Entrada", content: "El área pública costera es de **acceso libre y gratuito**; no se cobra entrada.", note: "Algunos alquileres (botes, equipo de camping) pueden tener cargo por parte de operadores locales — consulte in situ." },
      duration: { title: "Duración Sugerida", content: "Recorrida costera + picnic: unas 2–3 horas.\nSenderismo + avistamiento + acampe: un día completo.", note: "Combine con Villa de Merlo o Los Molles para un viaje de 1–2 días." },
      tips: { title: "Consejos y Notas", items: [
        "**Sol e hidratación**: la altura sanluiseña es soleada y seca — use protector solar, sombrero y lleva agua",
        "Gran amplitud térmica día-noche; lleve una chaqueta liviana",
        "Calzado cómodo y antideslizante; algunos senderos de tierra se resbalan tras la lluvia",
        "**Etiqueta de avistamiento**: silencio, no acercarse a los nidos, use zoom en lugar de acercarse",
        "**No deje rastro**: retire su basura, evite químicos en el agua, cuide la 'aguada de los pájaros'",
        "Los últimos ~2 km son camino de ripio/pavimento de montaña; revise el estado en temporada de lluvias"
      ] }
    },
    transportation: {
      title: "Guía de Transporte Precisa",
      airport: { title: "Desde la Capital / Aeropuerto de San Luis", content: "El aeropuerto más cercano está en la capital provincial (~190 km); Córdoba es una alternativa. Desde allí se recomienda auto propio o alquilado.", options: [
        { name: "Auto propio / alquilado (Recomendado)", price: "unos 2–2,5 hs en auto", time: "190 km", steps: ["Desde la capital tome la ruta norte hacia Merlo", "En el Valle del Conlara siga los carteles 'Dique Piscu Yaco'", "En la Ruta Provincial 1 (RP-1) km 25,5 doble al camino de las sierras y recorra ~2 km hasta el lago"] }
      ]},
      publicTransport: {
        title: "Transporte Público",
        content: "Desde Villa de Merlo puede tomar un micro o viaje compartido hacia Cortaderas y caminar hacia el dique.",
        options: [
          {
            name: "Micro / viaje compartido (Merlo → Cortaderas)",
            description: "Tome un micro hacia Cortaderas desde la terminal de Merlo y pida bajar en el acceso a Piscu Yaco.",
            steps: [
              "Tome un micro con destino Cortaderas en Villa de Merlo",
              "Baje en el camino de acceso al dique",
              "Camine ~2 km (o use un traslado local) hasta la costa"
            ]
          }
        ]
      },
      city: { title: "Desde Villa de Merlo", content: "Merlo está a aproximadamente **25 km** y es la base de la mayoría. En auto son unos 20–30 minutos por el típico paisaje del Valle del Conlara.", steps: ["Desde Merlo tome RP-1 hacia el sur", "En ~km 25,5 gire al camino de las sierras", "Recorra ~2 km de pavimento hasta el estacionamiento costero"] },
      tips: { title: "Transporte y Altura", items: [
        "**Altura cómoda**: el dique está en un valle a ~1.000 m — más templado y agradable que la alta montaña",
        "Merlo tiene buena oferta de alojamiento y gastronomía como base",
        "La señal de celular es inestable en las sierras; descargue mapas offline",
        "Combine con Merlo y Los Molles en un mismo viaje",
        "Fines de semana y feriados el estacionamiento se llena: llegue temprano"
      ] }
    },
    reviews: {
      title: "Reseñas de Visitantes y Exploración Cercana",
      subtitle: "Voces de Piscu Yaco: Testimonios Reales de Google Maps",
      viewMore: "Ver Más Reseñas en Google Maps",
      nearbyTitle: "Atracciones Cercanas que Valen la Pena",
      nearbyIntro: "Tras visitar Piscu Yaco, puede recorrer fácilmente los siguientes destinos cercanos:",
      nearbyItems: [
        { name: "Villa de Merlo", description: "La villa de montaña más conocida de San Luis, famosa por su clima benigno, ferias artesanales y 'tierra de la longevidad', a ~25 km del dique." },
        { name: "Sierras de los Comechingones", description: "Cordón que abarca San Luis y Córdoba, lleno de senderos, cascadas y herencia indígena — un paraíso para el aire libre." },
        { name: "Los Molles", description: "Otro tranquilo pueblo de valle, conocido por aguas termales, senderos y observación de estrellas, parte del corredor Conlara junto a Piscu Yaco." }
      ]
    },
    gallery: { title: "Galería de Fotos", viewMore: "Ver Más Fotos en Google Maps" },
    faq: { title: "Preguntas Frecuentes", subtitle: "Aprenda Más Sobre Piscu Yaco", items: [
      { question: "¿Qué significa 'Piscu Yaco'?", answer: "‘Piscu Yaco’ proviene del quechua: ‘piscu’ significa pájaro e ‘yaco / yaku’ agua, juntos ‘la aguada de los pájaros’ (Aguada de los Pájaros), a veces leído como ‘agua clara’. El nombre honra al poeta sanluiseño Antonio Esteban Agüero y su ‘Cantata al Algarrobo Abuelo’." },
      { question: "¿Se paga entrada o hay horario fijo?", answer: "El área pública costera es libre y gratuita todo el año, sin ticket. Lo ideal es de día; la iluminación nocturna es limitada. Algunos alquileres de botes o camping pueden tener cargo por operadores locales." },
      { question: "¿Qué se puede hacer en Piscu Yaco?", answer: "Puede hacer kayak y remo, pesca deportiva, senderismo costero y avistamiento de aves, y picnic o acampe en zonas habilitadas. El agua calmada y las sierras lo hacen ideal para familias y amantes del aire libre." },
      { question: "¿Cómo llegar desde Villa de Merlo y cuánto tarda?", answer: "Merlo está a ~**25 km**. Tome RP-1 hacia el **sur**, gire al camino de las sierras en ~km 25,5 y recorra ~2 km — unos 20–30 minutos. Un micro a Cortaderas también baja en el acceso." },
      { question: "¿Qué precauciones tener al visitar?", answer: "La altura es soleada y seca: protéjase del sol e hidrátese; hay amplitud térmica. Guarde silencio para observar aves, retire su basura y evite químicos en el agua para cuidar esta ‘aguada de los pájaros’." }
    ]},
    location: { title: "Ubicación", address: "C2XV+QM\nCortaderas\nSan Luis\nArgentina", openMaps: "Ver en Google Maps" },
    footer: { callToAction: "Como cuerpo de agua público y preciado de las sierras de San Luis, únete a nosotros para cuidar el ambiente y proteger esta 'aguada de los pájaros'. Mantenla limpia para que más personas compartan su belleza.", text: "© 2026 Guía de Dique Piscu Yaco · Todos los derechos reservados.\nEste sitio es un proyecto independiente de guía educativa de terceros, dedicado a difundir información precisa sobre Dique Piscu Yaco. No estamos afiliados con el gobierno argentino ni con autoridad oficial alguna.", made: "Este es un proyecto educativo sin fines de lucro, hecho para exploradores y aprendices.", linksTitle: "Enlaces Amigos", links: ARGENTINA_LINKS },
    quicklinks: { reach: "Cómo llegar", beaches: "Playas", things: "Qué hacer", map: "Mapa" },
    quickfacts: {
      heading: "Datos útiles",
      items: [
        { label: "Ubicación", value: "Cortaderas, San Luis" },
        { label: "Zona", value: "Sierras de los Comechingones" },
        { label: "Cerca de", value: "Villa de Merlo" },
        { label: "Tipo", value: "Dique / lago / balneario" },
        { label: "Actividades", value: "Playa, kayak, paseo, picnic" },
        { label: "Ideal para", value: "Familias, parejas, naturaleza" },
        { label: "Cómo llegar", value: "Ruta Provincial Nº 1" },
      ],
    },
    water: {
      title: "Playas, balneario y el lago Piscu Yaco",
      intro: "El Dique Piscu Yaco no es solo una represa: es un espejo de agua, una playa de arena y un balneario en plena naturaleza. Con unas 16,9 hectáreas de agua cristalina rodeadas por las Sierras de los Comechingones, es uno de los rincones más buscados cerca de Villa de Merlo.",
      items: [
        { heading: "Playas y balneario del Dique Piscu Yaco", body: "La costa del embalse cuenta con playas de arena y sectores habilitados como balneario, ideales para pasar el día en familia. El agua tranquila y la vista de las sierras lo vuelven perfecto para relajarse lejos del ruido." },
        { heading: "¿Se puede nadar en el Dique Piscu Yaco?", body: "Sí: en las áreas habilitadas se puede bañar y disfrutar del agua. Al tratarse de un lago de montaña de poca profundidad cerca de la orilla, es apto para familias; no obstante, siempre conviene respetar las señalizaciones y los horarios sugeridos por los guardaparques." },
        { heading: "Kayak y actividades acuáticas", body: "La superficie en calma es ideal para kayak, canoa y remo. Las embarcaciones sin motor permiten recorrer el espejo de agua en silencio y observar aves. También es posible la pesca deportiva y el paseo en bote, siempre respetando las normas locales." },
        { heading: "El lago y las Sierras de los Comechingones", body: "Piscu Yaco es un lago artificial que se funde con la cadena montañosa de los Comechingones. Al atardecer, el agua queda en calma y las sierras se tiñen de ocre y rojo: el marco perfecto para fotos y para desconectar un fin de semana." },
      ],
    },
  },
  it: {
    nav: { history: "Cultura e Storia", architecture: "L'Invaso", monuments: "Attività", eco: "Responsabilità Ecologica", visiting: "Info Visita", transportation: "Trasporti", gallery: "Galleria", reviews: "Recensioni", faq: "FAQ", location: "Posizione" },
    hero: { tags: ["~25 km da Merlo", "Invaso ecologico", "Ingresso gratuito"], tagline: "Argentina · San Luis", title: "Dique Piscu Yaco", subtitle: "Dique Piscu Yaco · Acque Cristalline · Sierras de los Comechingones", cta: "Esplora Piscu Yaco" },
    rating: { reviews: "recensioni", source: "Recensioni Google" },
    history: {
      title: "Storia e Origini",
      intro: "Il Dique Piscu Yaco è più di un'opera moderna: è uno specchio d'acqua che riflette la lunga storia di San Luis. Si trova nella Valle del Conlara, a circa 6 km da Cortaderas e circa **25 km** da Villa de Merlo (su strada spesso 25–27 km), a circa 190 km dal capoluogo provinciale.\n\n**Echi dei Comechingones**\nPrima dell'arrivo degli spagnoli, queste sierras erano la casa del popolo Comechingones. La loro visione considerava montagna e acqua presenze vive, e l'acqua come sangue della Pachamama. Ancora oggi si possono trovare pitture rupestri e mortai di pietra (morteros) lungo sentieri vicini.\n\n**Un nome quechua, una risonanza poetica**\n‘Piscu Yaco’ viene dal quechua ed è spesso reso come ‘l'abbeveratoio degli uccelli’ (Aguada de los Pájaros). Il nome è anche associato all'immaginario del poeta Antonio Esteban Agüero e alla sua ‘Cantata al Algarrobo Abuelo’, dove uccelli, montagne e vecchi carrubi diventano simboli identitari.\n\n**Un traguardo di idrologia con attenzione ecologica**\nIl bacino è stato inaugurato il **20 dicembre 2010**. È il quindicesimo ‘specchio d'acqua’ di San Luis e il primo invaso costruito nelle Sierras de los Comechingones. Le sue acque (circa 16,9 ettari) contribuiscono alla regolazione e alla riserva nei periodi secchi e ospitano numerose specie di uccelli acquatici."
    },
    myths: {
      title: "Miti Indigeni della Sierra",
      intro: "Nella cosmologia dei Comechingones, acqua e montagna non sono scenari inerti ma forze vive. Questi racconti invitano a vivere Piscu Yaco con rispetto.",
      items: [
        {
          title: "Custodi dell'Acqua: il Serpente",
          content:
            "In un paesaggio montano arido, sorgenti e pozze erano considerate passaggi sacri verso un mondo sotterraneo di spiriti. Un grande serpente avrebbe custodito l'acqua chiara, simbolo del flusso e della vita della terra.\n\nAvvicinandosi all'acqua si chiedeva silenzio e si lasciavano piccole offerte sulla riva, come ringraziamento e richiesta di protezione.\n\nQuesto principio risuona oggi nella conservazione: proteggere l'acqua e visitare con impatto minimo."
        },
        {
          title: "Sole, Luna e Giganti Addormentati",
          content:
            "Un mito d'origine racconta che antichi giganti scelsero di diventare roccia per proteggere la valle dal vento e dal clima ostile, formando le creste visibili oggi.\n\nIn questa visione, le sierras sono la spina dorsale sollevata della Pachamama, mentre Sole (Inti) e Luna (Quilla) donano ritmo e luce.\n\nQuando l'alba o il tramonto colora il granito dietro il lago, lo si immagina come il momento in cui gli dèi si svegliano o riposano."
        },
        {
          title: "Messaggeri del Cielo: il Condor (Cóndor)",
          content:
            "Piscu Yaco porta un nome legato agli uccelli e, nella tradizione indigena, il condor è un messaggero tra terra e cielo.\n\nSi dice che quando muoiono gli anziani, un condor solleva il loro spirito sopra la Valle del Conlara fino a fonderlo con la montagna.\n\nOggi, vedere un grande rapace che gira alto sopra il lago può sembrare un'eco vivente di quell'immaginazione antica."
        }
      ]
    },
    curiosities: {
      title: "Note sul Nome e Contesto Letterario",
      content:
        "‘Piscu Yaco’ è spesso tradotto dal quechua come ‘l'abbeveratoio degli uccelli’ (Aguada de los Pájaros) e talvolta interpretato come ‘acqua chiara’ (agua clara). Entrambe le letture rimandano al valore dell'acqua pulita e della vita selvatica.\n\nIl nome è anche collegato all'immaginario del poeta Antonio Esteban Agüero, nella cui ‘Cantata al Algarrobo Abuelo’ uccelli, montagne e vecchi carrubi diventano simboli della regione."
    },
    eco: {
      title: "Responsabilità Ecologica",
      intro: "Piscu Yaco è un incontro tra un bene pubblico e un habitat naturale. Come guida educativa indipendente non profit, promuoviamo una visita a basso impatto per preservare l'ecosistema.",
      items: [
        "**Non lasciare tracce**: porta via tutti i rifiuti, mozziconi e avanzi di cibo",
        "**Proteggi l'acqua**: evita saponi, detergenti o prodotti chimici in o vicino al lago",
        "**Rispetta la fauna**: mantieni distanza dagli uccelli, non alimentarli, usa binocolo o zoom",
        "**Resta nelle aree consentite**: picnic e campeggio solo dove è permesso per non danneggiare l'habitat",
        "**Riduci rumore e luce**: evita musica alta e luci forti, soprattutto all'alba e al tramonto"
      ]
    },
    architecture: {
      title: "L'Invaso e il Paesaggio Circostante",
      intro: "Piscu Yaco non è solo una diga: è un paesaggio in cui un lago artificiale si fonde con la montagna selvaggia. Diga, scarichi e fascia verde costiera formano insieme uno spazio pubblico di ecoturismo.",
      specs: {
        structure: { title: "Struttura", content: "Come quindicesimo 'specchio d'acqua' di San Luis e primo invaso dei Comechingones, il corpo principale è costituito da una diga in terra e da un sistema di scarico. La superficie del lago è di circa 16,9 ettari, con circa 21 ettari considerando il bacino, per approvvigionamento, regolazione e turismo." },
        design: { title: "Forma del Territorio", content: "Incastonato tra le colline della Valle del Conlara, il bacino è incorniciato dai graniti tipici di San Luis e da boschi aridi (carrubi, chañares). L'acqua blu contro la roccia ocra-rossastra lo rende ideale per fotografia e schizzi." },
        optics: { title: "Esperienza Visiva", content: "Sentieri e aree di sosta costeggiano la riva, permettendo di avvicinarsi all'acqua e ammirare le creste. All'alba e al tramonto il lago è uno specchio e le sierras si tingono di caldo: il momento più toccante per vedere l'abbeveratoio degli uccelli." }
      },
      plaque: {
        title: "Informazioni di Base",
        items: [
          { label: "Nome", value: "Dique Piscu Yaco" },
          { label: "Posizione", value: "Valle del Conlara, Cortaderas, San Luis, Argentina" },
          { label: "Inaugurato", value: "20 dicembre 2010" },
          { label: "Superficie", value: "circa 16,9 ettari" },
          { label: "Dipartimento", value: "Chacabuco" },
          { label: "Località vicina", value: "Villa de Merlo (~25 km)" }
        ]
      }
    },
    monuments: {
      title: "Cosa Fare a Piscu Yaco",
      intro: "È insieme un rifugio a riva d'acqua e la porta delle Sierras de los Comechingones. Le attività seguenti piacciono a famiglie, coppie e amanti dell'outdoor.",
      items: [
        { name: "Kayak e Voga", description: "La superficie calma è ideale per kayak, canoa e voga ricreativa. Le barche senza motore permettono di avvicinarsi in silenzio e osservare gli uccelli." },
        { name: "Pesca Sportiva", description: "Sono presenti specie di acqua dolce che attirano molti pescatori. Rispetti le norme locali su attrezzatura e catture e pratichi il catch-and-release." },
        { name: "Trekking e Birdwatching", description: "I sentieri costieri e collinari sono adatti a facili passeggiate. Con il binocolo potresti vedere aironi, anatre e altro — proprio ciò che dà il nome all'abbeveratoio degli uccelli." },
        { name: "Picnic e Campeggio", description: "Le aree attrezzate permettono alle famiglie di rilassarsi tra montagna e acqua. Svegliarsi al vento di sierra e al suono dell'acqua al tramonto è indimenticabile." }
      ]
    },
    contrast: {
      title: "Tra Montagna e Acqua",
      intro: "Il fascino di Piscu Yaco sta nel come il lago artificiale e le sierras selvagge si completino. Da un lato, uno specchio d'acqua in calma; dall'altro, sierras antiche e silenziose — due vedute catturano questo equilibrio sereno.",
      before: "Lo Specchio d'Acqua",
      after: "Le Sierras che lo Abbracciano"
    },
    visiting: {
      title: "Pianifica la Tua Visita",
      intro: "Piscu Yaco è un invaso pubblico di montagna, perfetto per una mezza giornata o una giornata intera a riva d'acqua. Quello che segue aiuta a organizzarsi con calma.",
      hours: { title: "Accesso", content: "L'area pubblica costiera è aperta tutto l'anno. Si consiglia di visitare di giorno per le attività acquatiche e il trekking.", note: "Nessun orario di chiusura, ma l'illuminazione notturna è limitata: conviene lasciare la riva prima del tramonto." },
      price: { title: "Ingresso", content: "L'area pubblica costiera è **libera e gratuita**; non si paga biglietto.", note: "Alcuni noleggi (barche, attrezzatura da campeggio) possono essere a pagamento da operatori locali — verifica sul posto." },
      duration: { title: "Durata Consigliata", content: "Giro costiero + picnic: circa 2–3 ore.\nTrekking + birdwatching + campeggio: una giornata intera.", note: "Combina con Villa de Merlo o Los Molles per un viaggio di 1–2 giorni." },
      tips: { title: "Consigli e Note", items: [
        "**Sole e idratazione**: l'altopiano di San Luis è soleggiato e secco — usa crema solare, cappello e porta acqua",
        "Forte escursione termica giorno-notte; porta una giacca leggera",
        "Scarpe comode e antiscivolo; alcuni sentieri di terra sono scivolosi dopo la pioggia",
        "**Etichetta birdwatching**: silenzio, non avvicinarsi ai nidi, usa lo zoom invece di avvicinarti",
        "**Lascia solo orme**: porta via i rifiuti, evita prodotti chimici nell'acqua, proteggi l'abbeveratoio degli uccelli",
        "Gli ultimi ~2 km sono strada di montagna; controlla le condizioni in stagione delle piogge"
      ] }
    },
    transportation: {
      title: "Guida Precisa ai Trasporti",
      airport: { title: "Dalla Capitale / Aeroporto di San Luis", content: "L'aeroporto più vicino è a San Luis capitale (~190 km); Córdoba è un'alternativa. Da lì si consiglia auto propria o a noleggio.", options: [
        { name: "Auto propria / a noleggio (Consigliato)", price: "circa 2–2,5 h", time: "190 km", steps: ["Dalla capitale prendi la strada nord verso Merlo", "Nella Valle del Conlara segui i cartelli 'Dique Piscu Yaco'", "Sulla Ruta Provincial 1 (RP-1) al km 25,5 gira verso le sierras e prosegui ~2 km fino al lago"] }
      ]},
      publicTransport: {
        title: "Trasporto Pubblico",
        content: "Da Villa de Merlo puoi prendere un pullman o un passaggio condiviso verso Cortaderas e proseguire a piedi fino al bacino.",
        options: [
          {
            name: "Pullman / passaggio (Merlo → Cortaderas)",
            description: "Prendi un pullman per Cortaderas dalla terminal di Merlo e chiedi di scendere all'accesso di Piscu Yaco.",
            steps: [
              "A Villa de Merlo prendi un pullman per Cortaderas",
              "Scendi sulla strada di accesso al bacino",
              "Cammina ~2 km (o usa un trasferimento locale) fino alla riva"
            ]
          }
        ]
      },
      city: { title: "Da Villa de Merlo", content: "Merlo dista circa **25 km** ed è la base della maggior parte dei visitatori. In auto sono circa 20–30 minuti attraverso il tipico paesaggio della Valle del Conlara.", steps: ["Da Merlo prendi RP-1 verso sud", "Al ~km 25,5 gira verso le sierras", "Percorri ~2 km di asfalto fino al parcheggio sulla riva"] },
      tips: { title: "Trasporto e Altitudine", items: [
        "**Altitudine confortevole**: il bacino è in una valle a ~1.000 m — più mite e piacevole dell'alta montagna",
        "Merlo offre buon alloggio e ristorazione come base",
        "Il segnale cellulare è instabile in collina; scarica mappe offline",
        "Combina con Merlo e Los Molles in un unico viaggio",
        "Weekend e festivi il parcheggio si riempie: arriva presto"
      ] }
    },
    reviews: {
      title: "Recensioni dei Visitatori ed Esplorazione dei Dintorni",
      subtitle: "Voci da Piscu Yaco: Testimonianze Reali da Google Maps",
      viewMore: "Vedi Altre Recensioni su Google Maps",
      nearbyTitle: "Attrazioni dei Dintorni da Visitare",
      nearbyIntro: "Dopo aver visitato Piscu Yaco, puoi esplorare facilmente le seguenti destinazioni vicine:",
      nearbyItems: [
        { name: "Villa de Merlo", description: "La località di montagna più nota di San Luis, famosa per il clima mite, i mercatini artigianali e la 'terra della longevità', a circa ~25 km dal bacino." },
        { name: "Sierras de los Comechingones", description: "Catena tra San Luis e Córdoba, ricca di sentieri, cascate e patrimonio indigeno — un paradiso per gli amanti dell'outdoor." },
        { name: "Los Molles", description: "Un'altra tranquilla cittadina di valle, nota per terme, sentieri e osservazione delle stelle, parte del corridoio Conlara assieme a Piscu Yaco." }
      ]
    },
    gallery: { title: "Galleria Fotografica", viewMore: "Vedi Altre Foto su Google Maps" },
    faq: { title: "Domande Frequenti", subtitle: "Scopri di Più su Piscu Yaco", items: [
      { question: "Cosa significa 'Piscu Yaco'?", answer: "‘Piscu Yaco’ viene dal quechua: ‘piscu’ significa uccello e ‘yaco / yaku’ acqua, insieme ‘l'abbeveratoio degli uccelli’ (Aguada de los Pájaros), a volte letto come ‘acqua chiara’. Il nome onora il poeta di San Luis Antonio Esteban Agüero e la sua ‘Cantata al Carrubo Vecchio’." },
      { question: "C'è un biglietto d'ingresso o un orario fisso?", answer: "L'area pubblica sulla riva è libera e gratuita tutto l'anno, senza biglietto. Meglio di giorno; l'illuminazione notturna è limitata. Alcuni noleggi di barche o campeggio possono essere a pagamento da operatori locali." },
      { question: "Cosa si può fare a Piscu Yaco?", answer: "Puoi fare kayak e voga, pesca sportiva, facili passeggiate costiere e birdwatching, e picnic o campeggio nelle aree attrezzate. L'acqua calma e le sierras lo rendono ideale per famiglie e amanti dell'outdoor." },
      { question: "Come arrivarci da Villa de Merlo e quanto tempo serve?", answer: "Merlo dista circa **25 km**. Prendi RP-1 verso **sud**, gira verso le sierras al ~km 25,5 e prosegui ~2 km — circa 20–30 minuti. Un pullman per Cortaderas scende anche all'accesso." },
      { question: "Cosa bisogna tener presente visitando?", answer: "L'altopiano è soleggiato e secco: proteggiti dal sole e idratati; c'è forte escursione termica. Silenzio per il birdwatching, porta via i rifiuti ed evita sostanze chimiche nell'acqua per proteggere questo ‘abbeveratoio degli uccelli’." }
    ]},
    location: { title: "Posizione", address: "C2XV+QM\nCortaderas\nSan Luis\nArgentina", openMaps: "Vedi su Google Maps" },
    footer: { callToAction: "Come corpo idrico pubblico e prezioso delle sierras di San Luis, unisciti a noi per prenderti cura dell'ambiente e proteggere questo 'abbeveratoio degli uccelli'. Mantienilo pulito perché più persone possano condividere la sua bellezza.", text: "© 2026 Guida di Dique Piscu Yaco · Tutti i diritti riservati.\nQuesto sito è un progetto indipendente di guida educativa, dedicato a diffondere informazioni accurate su Dique Piscu Yaco. Non siamo affiliati con il governo argentino né con alcuna autorità ufficiale.", made: "Questo è un progetto educativo non profit, fatto per esploratori e apprendisti.", linksTitle: "Link Amici", links: ARGENTINA_LINKS, quicklinks: { reach: "Come arrivare", beaches: "Spiagge", things: "Cosa fare", map: "Mappa" } }
  }
};
