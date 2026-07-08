const storageKey = "relationship-radar-state";

const questionBank = [
  {
    id: "share",
    axis: "closeness",
    label: "日常分享",
    text: "看到有趣、烦恼或很小的日常，会自然想第一时间发给对方。",
    hint: "观察不是聊天频率本身，而是你会不会把对方当成生活里的第一批听众。",
    low: "只在有事时联系",
    high: "小事也想分享",
  },
  {
    id: "secret",
    axis: "closeness",
    label: "脆弱信任",
    text: "能和对方谈自己的压力、缺点、害怕或不太体面的部分。",
    hint: "真正的亲密通常不只发生在开心时，也发生在不需要假装很好的时候。",
    low: "只聊轻松话题",
    high: "能放心袒露",
  },
  {
    id: "memory",
    axis: "closeness",
    label: "被记得",
    text: "对方会记得你的偏好、重要日期、习惯，或你曾经认真说过的话。",
    hint: "被记得是一种很细的靠近，它说明对方把你的信息放进了自己的世界。",
    low: "常常记不住",
    high: "细节被放在心上",
  },
  {
    id: "meet",
    axis: "spark",
    label: "见面期待",
    text: "想到单独见面，会期待，也会有一点认真准备或在意表现。",
    hint: "不是普通见面也开心，而是你会不会因为是对方而额外多想一点。",
    low: "像见普通朋友",
    high: "会特别期待",
  },
  {
    id: "near",
    axis: "spark",
    label: "靠近感",
    text: "相处时会自然想靠近，或会注意语气、眼神、距离这些亲密细节。",
    hint: "心动常常藏在细节里：坐近一点、对视久一点、语气软一点。",
    low: "距离感稳定",
    high: "会在意亲密细节",
  },
  {
    id: "special",
    axis: "spark",
    label: "特殊感",
    text: "对方和别人亲近、玩笑或分享秘密时，你心里会有微妙波动。",
    hint: "这里不是鼓励占有欲，而是观察对方在你心里是否已经变得特别。",
    low: "基本没波动",
    high: "会明显在意",
  },
  {
    id: "active",
    axis: "mutual",
    label: "主动性",
    text: "主动联系、开启话题、安排见面，大致是双向的，而不是总由一方推进。",
    hint: "关系升温需要来回流动。如果长期只有一方用力，感受容易失衡。",
    low: "主要一方主动",
    high: "双方都会靠近",
  },
  {
    id: "reply",
    axis: "mutual",
    label: "认真回应",
    text: "一方表达在意、失落或想念时，另一方通常会认真接住，而不是敷衍带过。",
    hint: "回应质量比回复速度更重要，关键是对方有没有看见你的情绪。",
    low: "经常被带过",
    high: "会认真回应",
  },
  {
    id: "effort",
    axis: "mutual",
    label: "投入平衡",
    text: "两个人都会为这段关系腾出时间、调整安排，或在重要时刻出现。",
    hint: "投入不一定完全一样，但应该能感觉到彼此都在把关系当回事。",
    low: "投入差很多",
    high: "彼此都愿意付出",
  },
  {
    id: "safe",
    axis: "safety",
    label: "放松自在",
    text: "在对方面前能放松，不需要一直表现得很懂事、很有趣或很完美。",
    hint: "安全感不是永远不紧张，而是紧张之后也知道自己不会被轻易否定。",
    low: "总要维持形象",
    high: "能自然做自己",
  },
  {
    id: "respect",
    axis: "safety",
    label: "边界尊重",
    text: "说出不舒服、拒绝、想慢一点时，对方通常会尊重，而不是施压或冷处理。",
    hint: "能被拒绝而不惩罚你，是关系里非常重要的安全信号。",
    low: "拒绝后有压力",
    high: "边界被尊重",
  },
  {
    id: "clarity",
    axis: "safety",
    label: "表达清晰",
    text: "你们可以谈误会、吃醋、期待和不安，而不用靠猜测维持关系。",
    hint: "一段关系越模糊，越需要清晰表达来保护两个人的感受。",
    low: "很多事靠猜",
    high: "可以直接说",
  },
  {
    id: "plan",
    axis: "future",
    label: "近期计划",
    text: "会把对方放进未来几周或几个月的安排里，比如见面、节日或共同目标。",
    hint: "未来感不一定是很远的承诺，也可以是持续出现在彼此近期生活里。",
    low: "很少提前安排",
    high: "自然放进计划",
  },
  {
    id: "name",
    axis: "future",
    label: "关系定义",
    text: "会想确认这段关系到底是什么，或希望它比现在更清楚、更稳定。",
    hint: "想定义不代表急，可能只是这段关系已经值得你认真对待。",
    low: "不太想定义",
    high: "希望更明确",
  },
  {
    id: "public",
    axis: "future",
    label: "公开位置",
    text: "你们愿意在朋友、社交圈或日常安排里，给彼此一个更明确的位置。",
    hint: "不是所有关系都必须公开，但长期只存在于私下，常常会影响安全感。",
    low: "只适合私下",
    high: "愿意被看见",
  },
  {
    id: "steady",
    axis: "consistency",
    label: "温度稳定",
    text: "这段关系的温度比较稳定，不只是偶尔很近、偶尔又突然变远。",
    hint: "稳定不等于每天热烈，而是不会让人反复陷入忽冷忽热的猜测。",
    low: "忽近忽远明显",
    high: "温度比较稳定",
  },
  {
    id: "repair",
    axis: "consistency",
    label: "冲突修复",
    text: "出现误会、冷场或小冲突后，双方有能力把话说回来。",
    hint: "关系好不好不只看有没有问题，也看问题出现后能不能修复。",
    low: "容易不了了之",
    high: "能重新靠近",
  },
  {
    id: "pace",
    axis: "consistency",
    label: "节奏一致",
    text: "你们对联系频率、见面节奏和关系推进速度的期待大致能对上。",
    hint: "节奏差异不一定是坏事，但如果长期不同步，就需要被好好讨论。",
    low: "节奏经常错开",
    high: "节奏基本同频",
  },
  {
    id: "quiet",
    axis: "closeness",
    label: "安静相处",
    text: "即使不说话、各做各的，也不会觉得尴尬或必须找话题撑住气氛。",
    hint: "能一起安静，是关系从热闹走向舒服的一个信号。",
    low: "沉默会紧张",
    high: "安静也自在",
  },
  {
    id: "inside",
    axis: "closeness",
    label: "专属语境",
    text: "你们之间有别人不太懂的小梗、暗号、共同记忆或习惯性说法。",
    hint: "专属语境会让两个人像拥有一块只有彼此知道的小地图。",
    low: "没有特别语境",
    high: "有很多共同暗号",
  },
  {
    id: "notice",
    axis: "spark",
    label: "注意力偏向",
    text: "在人群里会更容易注意到对方的表情、位置、情绪变化或和谁互动。",
    hint: "心动经常先表现为注意力偏向：你会比自己想象中更快捕捉到对方。",
    low: "不会特别注意",
    high: "总会先看到对方",
  },
  {
    id: "imagine",
    axis: "spark",
    label: "浪漫想象",
    text: "偶尔会想象如果牵手、约会、确定关系，自己会是什么感受。",
    hint: "想象不等于一定要推进，但它说明这段关系已经进入了另一种可能性。",
    low: "很少这样想",
    high: "会自然想象",
  },
  {
    id: "remember_back",
    axis: "mutual",
    label: "回流感",
    text: "你分享过的事，对方之后会主动问后续，而不是听完就结束。",
    hint: "回流感说明对方不只是当下礼貌回应，也把你的事带到了之后。",
    low: "很少问后续",
    high: "会主动接回来",
  },
  {
    id: "small_promise",
    axis: "mutual",
    label: "小承诺",
    text: "答应的小事通常会做到，比如说要发的东西、约的时间、提过的小帮助。",
    hint: "小承诺的可靠度，会慢慢塑造你对这段关系的信任。",
    low: "常常落空",
    high: "小事也靠谱",
  },
  {
    id: "ask_need",
    axis: "safety",
    label: "需求表达",
    text: "你可以说出自己想被陪伴、想被确认、想要空间，而不会觉得很丢脸。",
    hint: "能表达需求，是安全关系里很珍贵的一层松弛。",
    low: "不敢说需要",
    high: "能自然表达",
  },
  {
    id: "emotion_load",
    axis: "safety",
    label: "情绪负担",
    text: "和对方相处后，你通常是更稳定、更被理解，而不是更消耗、更怀疑自己。",
    hint: "亲密关系会有波动，但不应该长期让你变得不像自己。",
    low: "经常被消耗",
    high: "相处后更安定",
  },
  {
    id: "daily_fit",
    axis: "future",
    label: "生活适配",
    text: "你能想象对方进入自己的日常节奏，而不是只适合出现在某些特殊时刻。",
    hint: "恋人感不只在浪漫场景里，也在日常生活能不能放得下彼此。",
    low: "只适合片段相处",
    high: "能进入日常",
  },
  {
    id: "exclusive",
    axis: "future",
    label: "唯一性期待",
    text: "如果对方也用同样方式对待别人，你会希望彼此能把边界说得更清楚。",
    hint: "唯一性期待常常是关系从暧昧走向定义前会浮出的信号。",
    low: "不太需要唯一",
    high: "希望边界更清楚",
  },
  {
    id: "follow_through",
    axis: "consistency",
    label: "说到做到",
    text: "对方表达的在意、想见、想继续靠近，后面通常能在行动里看见。",
    hint: "稳定感来自表达和行动能对上，而不是只在某一刻说得动听。",
    low: "表达和行动脱节",
    high: "行动跟得上表达",
  },
  {
    id: "busy_time",
    axis: "consistency",
    label: "忙碌时刻",
    text: "即使忙、累、压力大，你们也能用某种方式维持基本连接，而不是完全断掉。",
    hint: "忙的时候最能看出关系的真实韧性，因为热情会被现实挤压。",
    low: "一忙就断联",
    high: "忙也有连接",
  },
];

const axisMeta = {
  closeness: { label: "亲密", metricId: "metricCloseness" },
  spark: { label: "心动", metricId: "metricSpark" },
  mutual: { label: "双向", metricId: "metricMutual" },
  safety: { label: "安全", metricId: "metricSafety" },
  future: { label: "未来", metricId: "metricFuture" },
  consistency: { label: "稳定", metricId: "metricConsistency" },
};

const questionsPerAxis = 3;
const targetQuestionCount = 20;

const syncFieldBank = [
  {
    id: "hope",
    label: "我希望我们更像",
    options: ["朋友", "亲密朋友", "暧昧对象", "恋人", "先不要定义"],
  },
  {
    id: "guess",
    label: "我感觉对方把我当成",
    options: ["普通朋友", "重要朋友", "有好感的人", "恋人候选", "看不清"],
  },
  {
    id: "pace",
    label: "我舒服的推进速度",
    options: ["慢慢观察", "自然靠近", "可以明确一点", "希望尽快确认"],
  },
  {
    id: "contact",
    label: "理想联系频率",
    options: ["偶尔聊", "几天一次", "每天一点", "每天很多"],
  },
  {
    id: "alone_time",
    label: "理想独处方式",
    options: ["短时间见面", "边走边聊", "安静待着", "正式约会", "还不确定"],
  },
  {
    id: "care_style",
    label: "我喜欢被关心的方式",
    options: ["直接陪伴", "帮我解决", "认真听我说", "给我空间", "轻松转移注意"],
  },
  {
    id: "jealousy",
    label: "看到对方和别人亲近时",
    options: ["没什么感觉", "有点在意", "会想确认", "会明显吃醋", "看情况"],
  },
  {
    id: "conflict",
    label: "出现误会时我希望",
    options: ["先冷静", "当天说清", "慢慢解释", "用行动修复", "对方先开口"],
  },
  {
    id: "public",
    label: "别人问起我们时",
    options: ["普通朋友", "重要朋友", "有点暧昧", "可以大方承认", "暂时不定义"],
  },
  {
    id: "pace_limit",
    label: "关系推进让我舒服的界限",
    options: ["保持朋友", "慢慢靠近", "可以试探", "可以明确", "先观察"],
  },
  {
    id: "message_style",
    label: "聊天里我最看重",
    options: ["及时回复", "内容认真", "轻松有趣", "情绪被接住", "不用太频繁"],
  },
  {
    id: "future_talk",
    label: "谈未来计划时",
    options: ["先不聊", "聊近期安排", "可以聊期待", "想认真规划", "看对方态度"],
  },
];

const targetSyncCount = 10;

const boundaryItemBank = [
  { id: "goodnight", label: "每天晚安", hint: "每天固定的亲密仪式" },
  { id: "late_chat", label: "深夜长聊", hint: "在脆弱时段保持连接" },
  { id: "solo_trip", label: "单独旅行", hint: "长时间独处和共同安排" },
  { id: "public_photo", label: "公开合照", hint: "让关系被外界看见" },
  { id: "holiday_gift", label: "节日礼物", hint: "用礼物表达特殊位置" },
  { id: "physical_touch", label: "肢体亲密", hint: "牵手、拥抱或更近距离" },
  { id: "friend_intro", label: "介绍给朋友", hint: "进入彼此社交圈" },
  { id: "future_plan", label: "讨论未来计划", hint: "把彼此放进未来安排" },
  { id: "daily_checkin", label: "每天主动问候", hint: "稳定但可能有压力的联系" },
  { id: "location_share", label: "分享行程位置", hint: "安全感和空间感的平衡" },
  { id: "private_nickname", label: "专属称呼", hint: "只有彼此会用的称呼" },
  { id: "borrow_items", label: "借用私人物品", hint: "生活边界的靠近" },
  { id: "meet_family", label: "提到家人", hint: "进入更私人的生活层" },
  { id: "sleep_call", label: "睡前通话", hint: "高频亲密陪伴" },
  { id: "money_help", label: "金钱或账单帮助", hint: "容易影响边界的支持" },
  { id: "social_priority", label: "聚会优先陪对方", hint: "公开场合的特殊对待" },
  { id: "emotional_rescue", label: "情绪崩溃时找对方", hint: "把对方当成安全基地" },
  { id: "exclusive_weekend", label: "周末固定见面", hint: "稳定占用彼此时间" },
];

const targetBoundaryCount = 12;

const storyBank = [
  {
    id: "rain",
    title: "雨天只剩一把伞",
    choices: [
      { id: "care", text: "自然靠近一起走", tag: "spark" },
      { id: "safe", text: "先问对方是否介意", tag: "safety" },
      { id: "friend", text: "开玩笑化解尴尬", tag: "closeness" },
      { id: "alone", text: "再想办法各自走", tag: "boundary" },
    ],
  },
  {
    id: "late",
    title: "对方深夜说心情不好",
    choices: [
      { id: "call", text: "直接打电话陪着", tag: "closeness" },
      { id: "ask", text: "先问想聊天还是独处", tag: "safety" },
      { id: "text", text: "发消息慢慢安慰", tag: "mutual" },
      { id: "next", text: "约明天再聊", tag: "consistency" },
    ],
  },
  {
    id: "misread",
    title: "朋友误会你们在一起",
    choices: [
      { id: "smile", text: "有点开心但不解释", tag: "spark" },
      { id: "clear", text: "自然说明现在关系", tag: "safety" },
      { id: "joke", text: "用玩笑带过去", tag: "closeness" },
      { id: "talk", text: "之后找机会聊聊", tag: "future" },
    ],
  },
  {
    id: "cancel",
    title: "约好的见面临时取消",
    choices: [
      { id: "sad", text: "会失落，也想确认原因", tag: "spark" },
      { id: "ok", text: "理解并重新约时间", tag: "consistency" },
      { id: "space", text: "先给对方空间", tag: "safety" },
      { id: "cool", text: "减少期待，观察后续", tag: "boundary" },
    ],
  },
  {
    id: "birthday",
    title: "对方生日快到了",
    choices: [
      { id: "special", text: "准备一份很用心的礼物", tag: "spark" },
      { id: "ask", text: "先确认对方喜欢怎样过", tag: "safety" },
      { id: "casual", text: "轻松祝福，不搞太隆重", tag: "boundary" },
      { id: "plan", text: "提前约一天单独庆祝", tag: "future" },
    ],
  },
  {
    id: "seen",
    title: "消息已读很久没回",
    choices: [
      { id: "wait", text: "先等一等，不急着追问", tag: "safety" },
      { id: "worry", text: "会担心是不是自己说错话", tag: "spark" },
      { id: "follow", text: "过一会儿自然补一句", tag: "mutual" },
      { id: "cool", text: "减少主动，看看对方后续", tag: "consistency" },
    ],
  },
  {
    id: "group",
    title: "一群朋友聚会时",
    choices: [
      { id: "sit", text: "会自然想坐近一点", tag: "spark" },
      { id: "balance", text: "照顾全场但会留意对方", tag: "mutual" },
      { id: "normal", text: "像普通朋友一样相处", tag: "boundary" },
      { id: "signal", text: "会观察对方有没有特殊对待", tag: "closeness" },
    ],
  },
  {
    id: "ill",
    title: "对方身体不舒服",
    choices: [
      { id: "visit", text: "想直接去看看或送东西", tag: "closeness" },
      { id: "ask_need", text: "先问对方需要什么帮助", tag: "safety" },
      { id: "remind", text: "持续提醒休息吃药", tag: "consistency" },
      { id: "space", text: "表达关心后给空间", tag: "boundary" },
    ],
  },
  {
    id: "rumor",
    title: "有人说对方好像喜欢你",
    choices: [
      { id: "happy", text: "会忍不住开心", tag: "spark" },
      { id: "verify", text: "想找机会确认一下", tag: "future" },
      { id: "protect", text: "不想让对方被起哄尴尬", tag: "safety" },
      { id: "laugh", text: "笑一笑先不当真", tag: "boundary" },
    ],
  },
  {
    id: "choice",
    title: "你有重要决定想听意见",
    choices: [
      { id: "first", text: "第一个想到问对方", tag: "closeness" },
      { id: "compare", text: "会听，但也问其他朋友", tag: "boundary" },
      { id: "deep", text: "想认真聊价值观", tag: "future" },
      { id: "support", text: "更需要情绪支持", tag: "mutual" },
    ],
  },
  {
    id: "distance",
    title: "一段时间不能见面",
    choices: [
      { id: "plan_call", text: "提前约好通话或下次见面", tag: "consistency" },
      { id: "miss", text: "会明显想念", tag: "spark" },
      { id: "daily", text: "用日常分享保持连接", tag: "closeness" },
      { id: "free", text: "各自忙也可以", tag: "safety" },
    ],
  },
];

const targetStoryCount = 10;

const elements = {
  personA: document.querySelector("#personA"),
  personB: document.querySelector("#personB"),
  pairTitle: document.querySelector("#pairTitle"),
  quickType: document.querySelector("#quickType"),
  quickScore: document.querySelector("#quickScore"),
  refreshQuestions: document.querySelector("#refreshQuestions"),
  refreshSync: document.querySelector("#refreshSync"),
  refreshBoundary: document.querySelector("#refreshBoundary"),
  refreshStories: document.querySelector("#refreshStories"),
  questionSetBadge: document.querySelector("#questionSetBadge"),
  questionList: document.querySelector("#questionList"),
  syncGrid: document.querySelector("#syncGrid"),
  boundaryGrid: document.querySelector("#boundaryGrid"),
  noteA: document.querySelector("#noteA"),
  noteB: document.querySelector("#noteB"),
  noteLabelA: document.querySelector("#noteLabelA"),
  noteLabelB: document.querySelector("#noteLabelB"),
  diaryForm: document.querySelector("#diaryForm"),
  diaryDate: document.querySelector("#diaryDate"),
  diaryList: document.querySelector("#diaryList"),
  diaryBadge: document.querySelector("#diaryBadge"),
  syncBadge: document.querySelector("#syncBadge"),
  boundaryBadge: document.querySelector("#boundaryBadge"),
  storyBadge: document.querySelector("#storyBadge"),
  storyList: document.querySelector("#storyList"),
  radarChart: document.querySelector("#radarChart"),
  resultType: document.querySelector("#resultType"),
  resultSummary: document.querySelector("#resultSummary"),
  portraitInsights: document.querySelector("#portraitInsights"),
  portraitBars: document.querySelector("#portraitBars"),
  conversationPrompts: document.querySelector("#conversationPrompts"),
  adviceList: document.querySelector("#adviceList"),
  shareStatus: document.querySelector("#shareStatus"),
  completionBadge: document.querySelector("#completionBadge"),
  completeA: document.querySelector("#completeA"),
  completeB: document.querySelector("#completeB"),
  copyForA: document.querySelector("#copyForA"),
  copyForB: document.querySelector("#copyForB"),
  shareText: document.querySelector("#shareText"),
  copyResult: document.querySelector("#copyResult"),
  resetAll: document.querySelector("#resetAll"),
};

let fallbackStoredState = "";
let state = loadState();

function uid() {
  if (window.crypto && typeof window.crypto.randomUUID === "function") {
    return window.crypto.randomUUID();
  }

  return `rr-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function shuffle(items) {
  const result = [...items];

  for (let index = result.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [result[index], result[swapIndex]] = [result[swapIndex], result[index]];
  }

  return result;
}

function isSameQuestionSet(questionIds, nextQuestionIds) {
  if (questionIds.length !== nextQuestionIds.length) {
    return false;
  }

  const current = [...questionIds].sort().join("|");
  const next = [...nextQuestionIds].sort().join("|");
  return current === next;
}

function pickRandomQuestionIds(previousQuestionIds = []) {
  const axes = Object.keys(axisMeta);
  const createQuestionSet = () => {
    const baseQuestionIds = axes.flatMap((axis) =>
      shuffle(questionBank.filter((question) => question.axis === axis))
        .slice(0, questionsPerAxis)
        .map((question) => question.id)
    );
    const baseQuestionIdSet = new Set(baseQuestionIds);
    const extraQuestionIds = shuffle(questionBank.filter((question) => !baseQuestionIdSet.has(question.id)))
      .slice(0, targetQuestionCount - baseQuestionIds.length)
      .map((question) => question.id);

    return shuffle([...baseQuestionIds, ...extraQuestionIds]);
  };

  for (let attempt = 0; attempt < 12; attempt += 1) {
    const nextQuestionIds = createQuestionSet();

    if (!isSameQuestionSet(previousQuestionIds, nextQuestionIds)) {
      return nextQuestionIds;
    }
  }

  return createQuestionSet();
}

function pickRandomIds(items, targetCount, previousIds = []) {
  const createSet = () => shuffle(items).slice(0, targetCount).map((item) => item.id);

  for (let attempt = 0; attempt < 12; attempt += 1) {
    const nextIds = createSet();
    if (!isSameQuestionSet(previousIds, nextIds)) {
      return nextIds;
    }
  }

  return createSet();
}

function getValidQuestionIds(questionIds) {
  const knownIds = new Set(questionBank.map((question) => question.id));
  const uniqueIds = [...new Set(questionIds || [])].filter((id) => knownIds.has(id));
  const hasEnoughPerAxis = Object.keys(axisMeta).every(
    (axis) => uniqueIds.filter((id) => questionBank.find((question) => question.id === id)?.axis === axis).length >= questionsPerAxis
  );

  return uniqueIds.length === targetQuestionCount && hasEnoughPerAxis ? uniqueIds : [];
}

function getValidIds(ids, items, targetCount) {
  const knownIds = new Set(items.map((item) => item.id));
  const uniqueIds = [...new Set(ids || [])].filter((id) => knownIds.has(id));
  return uniqueIds.length === targetCount ? uniqueIds : [];
}

function getActiveQuestions() {
  const validIds = getValidQuestionIds(state.activeQuestionIds);

  if (!validIds.length) {
    state.activeQuestionIds = pickRandomQuestionIds();
    resetActiveAnswers();
    saveState();
  }

  const questionById = new Map(questionBank.map((question) => [question.id, question]));
  return state.activeQuestionIds.map((id) => questionById.get(id)).filter(Boolean);
}

function getActiveSyncFields() {
  const validIds = getValidIds(state.activeSyncIds, syncFieldBank, targetSyncCount);

  if (!validIds.length) {
    state.activeSyncIds = pickRandomIds(syncFieldBank, targetSyncCount);
    resetActiveSyncAnswers();
    saveState();
  }

  const fieldById = new Map(syncFieldBank.map((field) => [field.id, field]));
  return state.activeSyncIds.map((id) => fieldById.get(id)).filter(Boolean);
}

function getActiveBoundaryItems() {
  const validIds = getValidIds(state.activeBoundaryIds, boundaryItemBank, targetBoundaryCount);

  if (!validIds.length) {
    state.activeBoundaryIds = pickRandomIds(boundaryItemBank, targetBoundaryCount);
    saveState();
  }

  const itemById = new Map(boundaryItemBank.map((item) => [item.id, item]));
  return state.activeBoundaryIds.map((id) => itemById.get(id)).filter(Boolean);
}

function getActiveStories() {
  const validIds = getValidIds(state.activeStoryIds, storyBank, targetStoryCount);

  if (!validIds.length) {
    state.activeStoryIds = pickRandomIds(storyBank, targetStoryCount);
    resetActiveStoryAnswers();
    saveState();
  }

  const storyById = new Map(storyBank.map((story) => [story.id, story]));
  return state.activeStoryIds.map((id) => storyById.get(id)).filter(Boolean);
}

function resetActiveAnswers() {
  state.activeQuestionIds.forEach((questionId) => {
    state.answers[questionId] = { a: 3, b: 3 };
  });
  state.completed = { a: false, b: false };
}

function resetActiveSyncAnswers() {
  state.activeSyncIds.forEach((fieldId) => {
    const field = syncFieldBank.find((item) => item.id === fieldId);
    if (!field) {
      return;
    }

    state.sync.a[fieldId] = field.options[1] || field.options[0];
    state.sync.b[fieldId] = field.options[1] || field.options[0];
  });
  state.completed = { a: false, b: false };
}

function resetActiveStoryAnswers() {
  state.activeStoryIds.forEach((storyId) => {
    state.story[storyId] = { a: "", b: "" };
  });
  state.completed = { a: false, b: false };
}

function refreshQuestionSet() {
  state.activeQuestionIds = pickRandomQuestionIds(state.activeQuestionIds);
  resetActiveAnswers();
  saveState();
  renderQuestions();
  renderMetrics();
}

function refreshSyncSet() {
  state.activeSyncIds = pickRandomIds(syncFieldBank, targetSyncCount, state.activeSyncIds);
  resetActiveSyncAnswers();
  saveState();
  renderSync();
  renderMetrics();
}

function refreshBoundarySet() {
  state.activeBoundaryIds = pickRandomIds(boundaryItemBank, targetBoundaryCount, state.activeBoundaryIds);
  state.boundaries.a = [];
  state.boundaries.b = [];
  state.completed = { a: false, b: false };
  saveState();
  renderBoundaries();
  renderMetrics();
}

function refreshStorySet() {
  state.activeStoryIds = pickRandomIds(storyBank, targetStoryCount, state.activeStoryIds);
  resetActiveStoryAnswers();
  saveState();
  renderStories();
  renderMetrics();
}

function normalizeBoundarySelection(values = []) {
  const idSet = new Set(boundaryItemBank.map((item) => item.id));
  const labelToId = new Map(boundaryItemBank.map((item) => [item.label, item.id]));

  return [...new Set(values.map((value) => (idSet.has(value) ? value : labelToId.get(value))).filter(Boolean))];
}

function createFreshState() {
  const activeSyncIds = pickRandomIds(syncFieldBank, targetSyncCount);
  const activeBoundaryIds = pickRandomIds(boundaryItemBank, targetBoundaryCount);
  const activeStoryIds = pickRandomIds(storyBank, targetStoryCount);

  return {
    names: { a: "你", b: "TA" },
    activeQuestionIds: pickRandomQuestionIds(),
    activeSyncIds,
    activeBoundaryIds,
    activeStoryIds,
    answers: Object.fromEntries(questionBank.map((question) => [question.id, { a: 3, b: 3 }])),
    sync: {
      a: Object.fromEntries(syncFieldBank.map((field) => [field.id, field.options[1]])),
      b: Object.fromEntries(syncFieldBank.map((field) => [field.id, field.options[1]])),
    },
    boundaries: {
      a: activeBoundaryIds.slice(0, 3),
      b: activeBoundaryIds.slice(0, 3),
      noteA: "",
      noteB: "",
    },
    diary: [],
    story: Object.fromEntries(storyBank.map((story) => [story.id, { a: "", b: "" }])),
    completed: { a: false, b: false },
  };
}

function loadState() {
  const fresh = createFreshState();
  const stored = readStoredState();

  if (!stored) {
    return fresh;
  }

  try {
    const parsed = JSON.parse(stored);
    return {
      ...fresh,
      ...parsed,
      names: { ...fresh.names, ...parsed.names },
      activeQuestionIds: getValidQuestionIds(parsed.activeQuestionIds).length
        ? getValidQuestionIds(parsed.activeQuestionIds)
        : fresh.activeQuestionIds,
      activeSyncIds: getValidIds(parsed.activeSyncIds, syncFieldBank, targetSyncCount).length
        ? getValidIds(parsed.activeSyncIds, syncFieldBank, targetSyncCount)
        : fresh.activeSyncIds,
      activeBoundaryIds: getValidIds(parsed.activeBoundaryIds, boundaryItemBank, targetBoundaryCount).length
        ? getValidIds(parsed.activeBoundaryIds, boundaryItemBank, targetBoundaryCount)
        : fresh.activeBoundaryIds,
      activeStoryIds: getValidIds(parsed.activeStoryIds, storyBank, targetStoryCount).length
        ? getValidIds(parsed.activeStoryIds, storyBank, targetStoryCount)
        : fresh.activeStoryIds,
      answers: { ...fresh.answers, ...parsed.answers },
      sync: {
        a: { ...fresh.sync.a, ...parsed.sync?.a },
        b: { ...fresh.sync.b, ...parsed.sync?.b },
      },
      boundaries: {
        ...fresh.boundaries,
        ...parsed.boundaries,
        a: normalizeBoundarySelection(parsed.boundaries?.a || fresh.boundaries.a),
        b: normalizeBoundarySelection(parsed.boundaries?.b || fresh.boundaries.b),
      },
      story: { ...fresh.story, ...parsed.story },
      diary: Array.isArray(parsed.diary) ? parsed.diary : fresh.diary,
      completed: { ...fresh.completed, ...parsed.completed },
    };
  } catch {
    return fresh;
  }
}

function saveState() {
  writeStoredState(JSON.stringify(state));
}

function readStoredState() {
  try {
    return window.localStorage.getItem(storageKey) || fallbackStoredState;
  } catch {
    return fallbackStoredState;
  }
}

function writeStoredState(value) {
  fallbackStoredState = value;

  try {
    window.localStorage.setItem(storageKey, value);
  } catch {
    // Some browsers restrict localStorage when opening a local file directly.
  }
}

function clampScore(value) {
  return Math.max(0, Math.min(100, Math.round(value)));
}

function average(values) {
  if (!values.length) {
    return 0;
  }

  return values.reduce((sum, value) => sum + value, 0) / values.length;
}

function getAnswerScore(question) {
  const answer = state.answers[question.id] || { a: 3, b: 3 };
  return average([Number(answer.a || 3), Number(answer.b || 3)]) * 20;
}

function getDifferencePenalty() {
  const diffs = getActiveQuestions().map((question) => {
    const answer = state.answers[question.id] || { a: 3, b: 3 };
    return Math.abs(Number(answer.a || 3) - Number(answer.b || 3));
  });

  return average(diffs) * 10;
}

function getSyncScore() {
  const fieldScores = getActiveSyncFields().map((field) => {
    const valueA = state.sync.a[field.id];
    const valueB = state.sync.b[field.id];
    const indexA = field.options.indexOf(valueA);
    const indexB = field.options.indexOf(valueB);

    if (valueA === valueB) {
      return 100;
    }

    if (indexA >= 0 && indexB >= 0) {
      return Math.max(35, 100 - Math.abs(indexA - indexB) * 24);
    }

    return 45;
  });

  return clampScore(average(fieldScores));
}

function getBoundaryScore() {
  const activeBoundaryIds = new Set(getActiveBoundaryItems().map((item) => item.id));
  const setA = new Set(normalizeBoundarySelection(state.boundaries.a).filter((id) => activeBoundaryIds.has(id)));
  const setB = new Set(normalizeBoundarySelection(state.boundaries.b).filter((id) => activeBoundaryIds.has(id)));
  const union = new Set([...setA, ...setB]);
  let overlap = 0;

  union.forEach((item) => {
    if (setA.has(item) && setB.has(item)) {
      overlap += 1;
    }
  });

  if (!union.size) {
    return 60;
  }

  return clampScore((overlap / union.size) * 100);
}

function getStoryScore() {
  const selected = getActiveStories()
    .map((story) => state.story[story.id])
    .filter((answer) => answer && answer.a && answer.b);

  if (!selected.length) {
    return 60;
  }

  const scores = selected.map((answer) => (answer.a === answer.b ? 100 : 58));
  return clampScore(average(scores));
}

function getDiaryEntryScore(entry) {
  const moodPenalty = {
    困惑: 8,
    压力: 12,
    距离感: 10,
  };
  const warmth = Number(entry.warmth || 3);
  const closeness = Number(entry.closeness || 3);
  const pressure = Number(entry.pressure || 3);
  const base = (warmth + closeness + (6 - pressure)) * (100 / 15);

  return clampScore(base - (moodPenalty[entry.mood] || 0));
}

function getDiaryScore() {
  if (!state.diary.length) {
    return 60;
  }

  const latest = state.diary.slice(0, 8);
  const scores = latest.map(getDiaryEntryScore);
  return clampScore(average(scores));
}

function computeMetrics() {
  const base = Object.fromEntries(
    Object.keys(axisMeta).map((axis) => {
      const axisQuestions = getActiveQuestions().filter((question) => question.axis === axis);
      return [axis, average(axisQuestions.map(getAnswerScore))];
    })
  );

  const syncScore = getSyncScore();
  const boundaryScore = getBoundaryScore();
  const storyScore = getStoryScore();
  const diaryScore = getDiaryScore();
  const differencePenalty = getDifferencePenalty();

  return {
    closeness: clampScore(base.closeness * 0.72 + storyScore * 0.12 + diaryScore * 0.16),
    spark: clampScore(base.spark * 0.82 + storyScore * 0.18),
    mutual: clampScore(base.mutual * 0.64 + syncScore * 0.26 + (100 - differencePenalty) * 0.1),
    safety: clampScore(base.safety * 0.7 + boundaryScore * 0.3),
    future: clampScore(base.future * 0.76 + syncScore * 0.24),
    consistency: clampScore(base.consistency * 0.66 + diaryScore * 0.22 + storyScore * 0.12),
  };
}

function classify(metrics) {
  const total = clampScore(average(Object.values(metrics)));
  let type = "关系还在成形";
  let summary = "你们有一些可以继续观察的信号，但目前最重要的是让期待和边界更清楚。";

  if (metrics.safety < 46 || metrics.mutual < 44) {
    type = "需要慢一点沟通";
    summary = "这段关系里可能存在节奏、回应或边界的不一致。先把舒服和不舒服说清楚，比急着定义更重要。";
  } else if (metrics.spark >= 74 && metrics.future >= 66 && metrics.closeness >= 66) {
    type = "恋人倾向明显";
    summary = "亲密、心动和未来感都比较强。如果双方也愿意把关系说清楚，可以认真讨论下一步。";
  } else if (metrics.closeness >= 68 && metrics.spark >= 54) {
    type = "暧昧升温";
    summary = "你们已经不只是普通朋友的互动，但关系仍需要更多确认。适合用轻一点的方式试探真实期待。";
  } else if (metrics.closeness >= 62 && metrics.spark < 54) {
    type = "亲密朋友倾向";
    summary = "亲密和信任比较明显，但恋爱信号不算强。珍惜这份靠近，也给彼此保留不被误读的空间。";
  } else if (total >= 70) {
    type = "稳定靠近中";
    summary = "整体信号不错，关系在稳定靠近。下一步可以看双方是否愿意增加明确表达。";
  }

  return { type, summary, total };
}

function getAdvice(metrics) {
  const sorted = Object.entries(metrics).sort((a, b) => a[1] - b[1]);
  const [lowestAxis] = sorted[0];
  const advice = {
    closeness: "亲密感偏弱时，可以从更真实的分享开始，不急着制造浪漫。",
    spark: "心动信号不清楚时，观察自己是否期待独处、是否会主动制造下一次见面。",
    mutual: "双向感不足时，少猜一点，多看对方是否也会主动安排、回应和修复。",
    safety: "安全感不足时，先谈边界和节奏。舒服感是关系升级的地基。",
    future: "未来感偏弱时，可以聊聊近期计划，而不是直接追问关系定义。",
    consistency: "稳定性不足时，先看连续几次互动是否可靠，再决定要不要投入更多。",
  };

  const result = [advice[lowestAxis]];
  if (metrics.spark >= 70 && metrics.safety >= 60) {
    result.push("心动已经存在，可以尝试一次更明确的邀约，看对方是否愿意同频靠近。");
  }
  if (getBoundaryScore() < 55) {
    result.push("边界卡差异较大，建议先对齐哪些互动会让彼此有压力。");
  }
  if (getSyncScore() < 55) {
    result.push("默契卡显示期待不太一致，适合用开放问题聊聊彼此想要的关系节奏。");
  }

  return [...new Set(result)].slice(0, 3);
}

function getMetricRank(metrics) {
  return Object.entries(metrics).sort((a, b) => b[1] - a[1]);
}

function getAxisDescription(axis, value) {
  const descriptions = {
    closeness: {
      high: "你们已经有比较自然的分享、信任和被记得的感觉，关系不是停留在表面互动。",
      mid: "亲密感正在形成，但还需要更多真实分享和稳定陪伴来加深。",
      low: "亲密信号还偏弱，适合先从轻量、真实、无压力的分享开始。",
    },
    spark: {
      high: "心动信号比较清楚，期待、特殊感和靠近欲都在关系里冒头。",
      mid: "有一些心动迹象，但还不稳定，适合继续观察独处和主动靠近时的感受。",
      low: "恋爱张力暂时不强，关系更像舒服的熟悉或朋友式连接。",
    },
    mutual: {
      high: "双向感不错，两个人都有回应、投入和把关系接住的动作。",
      mid: "双方不是完全不同频，但主动和回应仍需要更均衡。",
      low: "目前可能有一方更用力，建议先看对方是否也愿意主动推进。",
    },
    safety: {
      high: "安全感较好，拒绝、边界和脆弱表达大多能被尊重。",
      mid: "安全感有基础，但一些边界、压力或不安还值得说清楚。",
      low: "安全信号偏弱，先放慢节奏，把舒服和不舒服讲明白更重要。",
    },
    future: {
      high: "未来感比较强，你们已经在近期安排、关系定义或公开位置上有想象。",
      mid: "未来感正在出现，但还需要更多明确计划和关系位置。",
      low: "这段关系更多停在当下，暂时不急着推远期承诺。",
    },
    consistency: {
      high: "稳定性不错，关系温度、修复能力和忙碌时的连接比较可靠。",
      mid: "稳定性有基础，但仍要观察是否会忽近忽远。",
      low: "稳定性是当前短板，适合先看连续几次互动是否可靠。",
    },
  };
  const level = value >= 72 ? "high" : value >= 52 ? "mid" : "low";

  return descriptions[axis][level];
}

function getRelationshipPace(metrics) {
  if (metrics.spark >= 72 && metrics.future >= 66 && metrics.safety >= 58) {
    return {
      title: "适合认真确认",
      body: "心动和未来感已经比较明显，只要双方都觉得安全，可以把关系期待讲得更清楚一点。",
    };
  }

  if (metrics.closeness >= 66 && metrics.safety >= 60 && metrics.spark < 58) {
    return {
      title: "适合温柔观察",
      body: "亲密和安全感比心动更明显，适合先珍惜这份靠近，不急着把关系推到恋人框架里。",
    };
  }

  if (metrics.mutual < 50 || metrics.safety < 50) {
    return {
      title: "适合先放慢",
      body: "现在最需要的不是定义关系，而是确认双方是否同样愿意回应、尊重边界并减少猜测。",
    };
  }

  return {
    title: "适合继续靠近",
    body: "整体信号还在成形，可以用更具体的邀约、分享和边界沟通来判断关系会不会自然升温。",
  };
}

function getModuleConfidence() {
  const diaryCount = state.diary.length;
  const storyAnswers = getActiveStories().filter((story) => state.story[story.id]?.a && state.story[story.id]?.b).length;
  const syncScore = getSyncScore();
  const boundaryScore = getBoundaryScore();
  const storyScore = getStoryScore();
  const diaryScore = getDiaryScore();
  const filledStoryRatio = storyAnswers / Math.max(1, getActiveStories().length);
  const diaryRatio = Math.min(1, diaryCount / 5);
  const confidence = clampScore(42 + filledStoryRatio * 24 + diaryRatio * 18 + (syncScore + boundaryScore + storyScore + diaryScore) / 400 * 16);

  return {
    score: confidence,
    title: confidence >= 76 ? "画像可信度较高" : confidence >= 58 ? "画像可信度中等" : "画像还需要更多记录",
    body:
      confidence >= 76
        ? "你们已经留下了足够多的选择、边界和互动痕迹，画像可以作为一次认真对话的起点。"
        : "继续补剧情选择和互动日记，会让画像更接近真实关系，而不是只靠当下感觉。",
  };
}

function getPortraitCards(metrics, result) {
  const ranked = getMetricRank(metrics);
  const [strongAxis, strongValue] = ranked[0];
  const [softAxis, softValue] = ranked[ranked.length - 1];
  const pace = getRelationshipPace(metrics);
  const confidence = getModuleConfidence();

  return [
    {
      label: "主信号",
      title: `${axisMeta[strongAxis].label}最亮`,
      value: strongValue,
      body: getAxisDescription(strongAxis, strongValue),
    },
    {
      label: "需要照顾",
      title: `${axisMeta[softAxis].label}还需要空间`,
      value: softValue,
      body: getAxisDescription(softAxis, softValue),
    },
    {
      label: "关系节奏",
      title: pace.title,
      value: result.total,
      body: pace.body,
    },
    {
      label: "可信度",
      title: confidence.title,
      value: confidence.score,
      body: confidence.body,
    },
  ];
}

function getConversationPrompts(metrics) {
  const ranked = getMetricRank(metrics);
  const [strongAxis] = ranked[0];
  const [softAxis] = ranked[ranked.length - 1];
  const prompts = {
    closeness: "我们最近有没有哪一刻，觉得对方真的懂自己？",
    spark: "如果只看心动，不看习惯，我们会怎么描述彼此的位置？",
    mutual: "现在是谁更主动？我们希望这种主动更平均一点吗？",
    safety: "哪些靠近会让我们舒服，哪些会让人有压力？",
    future: "接下来一个月，我们希望彼此出现在什么位置？",
    consistency: "如果之后忙起来，我们想用什么方式保持连接？",
  };
  const extra = metrics.spark >= 70 ? "我们愿不愿意试一次更明确的单独邀约？" : "我们更想把这段关系保持轻松，还是慢慢说清楚？";

  return [...new Set([prompts[strongAxis], prompts[softAxis], extra])].slice(0, 3);
}

function getPersonName(person) {
  return state.names[person] || (person === "a" ? "你" : "TA");
}

function getOtherPerson(person) {
  return person === "a" ? "b" : "a";
}

function getCompletionCount() {
  return Number(Boolean(state.completed?.a)) + Number(Boolean(state.completed?.b));
}

function areBothCompleted() {
  return Boolean(state.completed?.a && state.completed?.b);
}

function invalidateCompletion(person) {
  if (!state.completed) {
    state.completed = { a: false, b: false };
  }

  if (state.completed[person]) {
    state.completed[person] = false;
  }
}

function markCompleted(person) {
  state.completed ||= { a: false, b: false };
  state.completed[person] = true;
  saveState();
  renderMetrics();
}

function buildShareText(metrics, result, targetPerson = "a") {
  const targetName = getPersonName(targetPerson);
  const otherName = getPersonName(getOtherPerson(targetPerson));
  const advice = getAdvice(metrics);
  const cards = getPortraitCards(metrics, result);
  const prompts = getConversationPrompts(metrics);

  return [
    `${targetName}，这是你和${otherName}的关系雷达结果`,
    `关系倾向：${result.type}`,
    `总分：${result.total}`,
    `亲密 ${metrics.closeness} / 心动 ${metrics.spark} / 双向 ${metrics.mutual} / 安全 ${metrics.safety} / 未来 ${metrics.future} / 稳定 ${metrics.consistency}`,
    "",
    result.summary,
    "",
    "画像洞察：",
    ...cards.map((card) => `${card.label}：${card.title}（${card.value}） - ${card.body}`),
    "",
    "适合一起聊的问题：",
    ...prompts.map((item, index) => `${index + 1}. ${item}`),
    "",
    "可以一起聊的下一步：",
    ...advice.map((item, index) => `${index + 1}. ${item}`),
    "",
    "这不是结论，是给两个人一起沟通的观察卡。",
  ].join("\n");
}

async function copyText(text) {
  elements.shareText.value = text;
  elements.shareText.select();

  try {
    await navigator.clipboard.writeText(text);
  } catch {
    document.execCommand("copy");
  }
}

function renderPeople() {
  elements.personA.value = state.names.a;
  elements.personB.value = state.names.b;
  elements.pairTitle.textContent = `${state.names.a || "你"} 和 ${state.names.b || "TA"}`;
  elements.noteLabelA.textContent = `${state.names.a || "你"}需要保留的空间`;
  elements.noteLabelB.textContent = `${state.names.b || "TA"}需要保留的空间`;
}

function renderQuestions() {
  const activeQuestions = getActiveQuestions();
  elements.questionList.replaceChildren();
  elements.questionSetBadge.textContent = `${activeQuestions.length} 题 · 1-5 分`;

  activeQuestions.forEach((question, index) => {
    const answer = state.answers[question.id] || { a: 3, b: 3 };
    const card = document.createElement("article");
    card.className = "question-card";
    card.innerHTML = `
      <div>
        <p class="eyebrow">${String(index + 1).padStart(2, "0")} · ${question.label} / ${axisMeta[question.axis].label}</p>
        <h4 class="question-title">${question.text}</h4>
        <p class="question-hint">${question.hint}</p>
      </div>
      <div class="score-anchors">
        <span>1 · ${question.low}</span>
        <span>5 · ${question.high}</span>
      </div>
      <div class="range-grid">
        ${renderRange(question.id, "a", state.names.a, answer.a)}
        ${renderRange(question.id, "b", state.names.b, answer.b)}
      </div>
    `;
    elements.questionList.append(card);
  });
}

function renderRange(questionId, person, name, value) {
  return `
    <label class="range-field">
      <span class="range-top">
        <span>${name || (person === "a" ? "你" : "TA")}</span>
        <output>${value}</output>
      </span>
      <input type="range" min="1" max="5" value="${value}" data-question="${questionId}" data-person="${person}" />
    </label>
  `;
}

function renderSync() {
  const activeSyncFields = getActiveSyncFields();
  elements.syncGrid.replaceChildren();

  activeSyncFields.forEach((field, index) => {
    const valueA = state.sync.a[field.id];
    const valueB = state.sync.b[field.id];
    const indexA = field.options.indexOf(valueA);
    const indexB = field.options.indexOf(valueB);
    const diff = Math.abs(indexA - indexB);
    const matchClass = valueA === valueB ? "good" : diff <= 1 ? "mid" : "";
    const matchText = valueA === valueB ? "一致" : diff <= 1 ? "接近" : "有差异";
    const card = document.createElement("article");
    card.className = "compare-card";
    card.innerHTML = `
      <div>
        <p class="eyebrow">Sync ${String(index + 1).padStart(2, "0")}</p>
        <h4 class="compare-title">${field.label}</h4>
      </div>
      <div class="select-pair">
        ${renderSelect(field, "a", state.names.a, valueA)}
        ${renderSelect(field, "b", state.names.b, valueB)}
      </div>
      <div class="compare-match">
        <span class="match-dot ${matchClass}"></span>
        <span>${matchText}</span>
      </div>
    `;
    elements.syncGrid.append(card);
  });
}

function renderSelect(field, person, name, value) {
  const options = field.options.map((option) => `<option value="${option}" ${option === value ? "selected" : ""}>${option}</option>`).join("");
  return `
    <label>
      <span>${name || (person === "a" ? "你" : "TA")}</span>
      <select data-sync="${field.id}" data-person="${person}">${options}</select>
    </label>
  `;
}

function renderBoundaries() {
  const activeBoundaryItems = getActiveBoundaryItems();
  elements.boundaryGrid.replaceChildren();

  ["a", "b"].forEach((person) => {
    const card = document.createElement("article");
    card.className = "boundary-card";
    const name = person === "a" ? state.names.a : state.names.b;
    const selected = new Set(normalizeBoundarySelection(state.boundaries[person]));
    card.innerHTML = `
      <div>
        <p class="eyebrow">Boundary</p>
        <h4 class="boundary-title">${name || (person === "a" ? "你" : "TA")}觉得舒服的靠近</h4>
      </div>
      <div class="boundary-options">
        ${activeBoundaryItems
          .map(
            (item) => `
              <label class="check-row">
                <input type="checkbox" value="${item.id}" data-boundary="${person}" ${selected.has(item.id) ? "checked" : ""} />
                <span><strong>${item.label}</strong><small>${item.hint}</small></span>
              </label>
            `
          )
          .join("")}
      </div>
    `;
    elements.boundaryGrid.append(card);
  });

  elements.noteA.value = state.boundaries.noteA;
  elements.noteB.value = state.boundaries.noteB;
}

function renderDiary() {
  elements.diaryBadge.textContent = `${state.diary.length} 条`;
  elements.diaryList.replaceChildren();

  if (!state.diary.length) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "还没有互动记录。";
    elements.diaryList.append(empty);
    return;
  }

  state.diary.forEach((entry) => {
    const item = document.createElement("article");
    item.className = "diary-item";
    const score = getDiaryEntryScore(entry);
    const actor = entry.actor || "双方";
    const mood = entry.mood || "未标记";
    const pressure = Number(entry.pressure || 3);
    item.innerHTML = `
      <div>
        <div class="diary-top">
          <strong>${entry.date} · ${entry.type}</strong>
          <button class="icon-button" type="button" title="删除记录" aria-label="删除记录" data-delete-diary="${entry.id}">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3 6h18" />
              <path d="M8 6V4h8v2" />
              <path d="M10 11v6" />
              <path d="M14 11v6" />
              <path d="M6 6l1 15h10l1-15" />
            </svg>
          </button>
        </div>
        <div class="diary-tags">
          <span>主动方：${actor}</span>
          <span>感受：${mood}</span>
          <span>压力：${pressure}/5</span>
        </div>
        <p>${entry.note || "没有备注"}</p>
        ${entry.next ? `<p class="diary-next-text">下一步：${entry.next}</p>` : ""}
      </div>
      <div class="mini-meter">
        <span><i style="width: ${score}%"></i></span>
        <strong>${score}</strong>
      </div>
    `;
    elements.diaryList.append(item);
  });
}

function renderStories() {
  const activeStories = getActiveStories();
  elements.storyList.replaceChildren();

  activeStories.forEach((story, index) => {
    const answer = state.story[story.id] || { a: "", b: "" };
    const card = document.createElement("article");
    card.className = "story-card";
    card.innerHTML = `
      <div class="story-top">
        <div>
          <p class="eyebrow">Scene ${String(index + 1).padStart(2, "0")}</p>
          <h4 class="story-title">${story.title}</h4>
        </div>
      </div>
      <div class="story-choices">
        ${renderStoryChoices(story, "a", state.names.a, answer.a)}
        ${renderStoryChoices(story, "b", state.names.b, answer.b)}
      </div>
    `;
    elements.storyList.append(card);
  });
}

function renderStoryChoices(story, person, name, value) {
  return `
    <div class="choice-block">
      <span class="choice-name">${name || (person === "a" ? "你" : "TA")}</span>
      <div class="choice-buttons">
        ${story.choices
          .map(
            (choice) => `
              <button class="choice-button ${choice.id === value ? "active" : ""}" type="button" data-story="${story.id}" data-person="${person}" data-choice="${choice.id}">
                ${choice.text}
              </button>
            `
          )
          .join("")}
      </div>
    </div>
  `;
}

function renderMetrics() {
  const metrics = computeMetrics();
  const result = classify(metrics);

  Object.entries(axisMeta).forEach(([axis, meta]) => {
    document.querySelector(`#${meta.metricId}`).textContent = metrics[axis];
  });

  elements.quickType.textContent = result.type;
  elements.quickScore.textContent = result.total;
  elements.syncBadge.textContent = `${getSyncScore()}% · ${getActiveSyncFields().length}题`;
  elements.boundaryBadge.textContent = `${getBoundaryScore()}% · ${getActiveBoundaryItems().length}项`;
  elements.storyBadge.textContent = `${getStoryScore()}% · ${getActiveStories().length}题`;

  renderResult(metrics, result);
}

function renderResult(metrics, result) {
  elements.resultType.textContent = result.type;
  elements.resultSummary.textContent = result.summary;
  elements.radarChart.innerHTML = createRadarSvg(metrics);
  renderPortraitInsights(metrics, result);
  renderPortraitBars(metrics);
  renderConversationPrompts(metrics);
  elements.adviceList.replaceChildren();

  getAdvice(metrics).forEach((item) => {
    const advice = document.createElement("div");
    advice.className = "advice-item";
    advice.textContent = item;
    elements.adviceList.append(advice);
  });

  renderSharePanel(metrics, result);
}

function renderPortraitInsights(metrics, result) {
  elements.portraitInsights.replaceChildren();

  getPortraitCards(metrics, result).forEach((card) => {
    const item = document.createElement("article");
    item.className = "portrait-insight";
    item.innerHTML = `
      <div>
        <span>${card.label}</span>
        <strong>${card.value}</strong>
      </div>
      <h5>${card.title}</h5>
      <p>${card.body}</p>
    `;
    elements.portraitInsights.append(item);
  });
}

function renderPortraitBars(metrics) {
  elements.portraitBars.replaceChildren();

  Object.entries(metrics).forEach(([axis, value]) => {
    const row = document.createElement("div");
    row.className = "portrait-bar";
    row.innerHTML = `
      <div>
        <span>${axisMeta[axis].label}</span>
        <strong>${value}</strong>
      </div>
      <i><b style="width: ${value}%"></b></i>
    `;
    elements.portraitBars.append(row);
  });
}

function renderConversationPrompts(metrics) {
  elements.conversationPrompts.replaceChildren();

  const heading = document.createElement("p");
  heading.className = "eyebrow";
  heading.textContent = "Conversation";
  elements.conversationPrompts.append(heading);

  getConversationPrompts(metrics).forEach((prompt) => {
    const item = document.createElement("span");
    item.className = "prompt-chip";
    item.textContent = prompt;
    elements.conversationPrompts.append(item);
  });
}

function renderSharePanel(metrics, result) {
  const completedCount = getCompletionCount();
  const bothCompleted = areBothCompleted();
  const nameA = getPersonName("a");
  const nameB = getPersonName("b");
  const waitingNames = [
    state.completed?.a ? "" : nameA,
    state.completed?.b ? "" : nameB,
  ].filter(Boolean);

  elements.completionBadge.textContent = `${completedCount}/2`;
  elements.shareStatus.textContent = bothCompleted ? "双方已完成，可以分享" : `等待 ${waitingNames.join("、")} 完成`;
  elements.completeA.classList.toggle("done", Boolean(state.completed?.a));
  elements.completeB.classList.toggle("done", Boolean(state.completed?.b));
  elements.completeA.querySelector("span").textContent = state.completed?.a ? `${nameA} 已完成` : `${nameA} 已写完`;
  elements.completeB.querySelector("span").textContent = state.completed?.b ? `${nameB} 已完成` : `${nameB} 已写完`;
  elements.copyForA.disabled = !bothCompleted;
  elements.copyForB.disabled = !bothCompleted;
  elements.copyForA.textContent = `复制给 ${nameA}`;
  elements.copyForB.textContent = `复制给 ${nameB}`;
  elements.shareText.value = bothCompleted
    ? buildShareText(metrics, result, "a")
    : "双方都标记完成后，这里会生成可分享的关系画像。";
}

function createRadarSvg(metrics) {
  const axes = Object.keys(axisMeta);
  const center = 250;
  const maxRadius = 170;
  const points = axes.map((axis, index) => {
    const angle = -Math.PI / 2 + (Math.PI * 2 * index) / axes.length;
    const radius = (metrics[axis] / 100) * maxRadius;
    return {
      axis,
      x: center + Math.cos(angle) * radius,
      y: center + Math.sin(angle) * radius,
      labelX: center + Math.cos(angle) * (maxRadius + 34),
      labelY: center + Math.sin(angle) * (maxRadius + 34),
    };
  });
  const polygon = points.map((point) => `${point.x},${point.y}`).join(" ");
  const rings = [0.25, 0.5, 0.75, 1]
    .map((scale) => {
      const ring = axes
        .map((_, index) => {
          const angle = -Math.PI / 2 + (Math.PI * 2 * index) / axes.length;
          return `${center + Math.cos(angle) * maxRadius * scale},${center + Math.sin(angle) * maxRadius * scale}`;
        })
        .join(" ");
      return `<polygon points="${ring}" fill="none" stroke="#d9ded4" stroke-width="1" />`;
    })
    .join("");
  const axisLines = axes
    .map((_, index) => {
      const angle = -Math.PI / 2 + (Math.PI * 2 * index) / axes.length;
      const x = center + Math.cos(angle) * maxRadius;
      const y = center + Math.sin(angle) * maxRadius;
      return `<line x1="${center}" y1="${center}" x2="${x}" y2="${y}" stroke="#d9ded4" stroke-width="1" />`;
    })
    .join("");
  const labels = points
    .map(
      (point) => `
        <text x="${point.labelX}" y="${point.labelY}" text-anchor="middle" dominant-baseline="middle" fill="#1e2524" font-size="16" font-weight="800">
          ${axisMeta[point.axis].label}
        </text>
      `
    )
    .join("");

  return `
    <svg viewBox="0 0 500 500" role="img" aria-label="关系六维雷达图">
      ${rings}
      ${axisLines}
      <polygon points="${polygon}" fill="rgba(35, 124, 112, 0.32)" stroke="#237c70" stroke-width="4" />
      ${points.map((point) => `<circle cx="${point.x}" cy="${point.y}" r="6" fill="#c95f52" />`).join("")}
      <circle cx="${center}" cy="${center}" r="4" fill="#1e2524" />
      ${labels}
    </svg>
  `;
}

function renderAll() {
  renderPeople();
  renderQuestions();
  renderSync();
  renderBoundaries();
  renderDiary();
  renderStories();
  renderMetrics();
}

document.querySelectorAll(".module-button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector(".module-button.active").classList.remove("active");
    button.classList.add("active");
    document.querySelector(".view.active").classList.remove("active");
    document.querySelector(`.view[data-view="${button.dataset.view}"]`).classList.add("active");
  });
});

elements.personA.addEventListener("input", () => {
  state.names.a = elements.personA.value.trim() || "你";
  saveState();
  renderAll();
});

elements.personB.addEventListener("input", () => {
  state.names.b = elements.personB.value.trim() || "TA";
  saveState();
  renderAll();
});

elements.questionList.addEventListener("input", (event) => {
  const input = event.target.closest("[data-question]");
  if (!input) {
    return;
  }

  state.answers[input.dataset.question] ||= { a: 3, b: 3 };
  state.answers[input.dataset.question][input.dataset.person] = Number(input.value);
  invalidateCompletion(input.dataset.person);
  saveState();
  renderQuestions();
  renderMetrics();
});

elements.syncGrid.addEventListener("change", (event) => {
  const select = event.target.closest("[data-sync]");
  if (!select) {
    return;
  }

  state.sync[select.dataset.person][select.dataset.sync] = select.value;
  invalidateCompletion(select.dataset.person);
  saveState();
  renderSync();
  renderMetrics();
});

elements.boundaryGrid.addEventListener("change", (event) => {
  const checkbox = event.target.closest("[data-boundary]");
  if (!checkbox) {
    return;
  }

  const person = checkbox.dataset.boundary;
  const selected = new Set(state.boundaries[person]);
  if (checkbox.checked) {
    selected.add(checkbox.value);
  } else {
    selected.delete(checkbox.value);
  }
  state.boundaries[person] = [...selected];
  invalidateCompletion(person);
  saveState();
  renderBoundaries();
  renderMetrics();
});

elements.noteA.addEventListener("input", () => {
  state.boundaries.noteA = elements.noteA.value;
  invalidateCompletion("a");
  saveState();
  renderMetrics();
});

elements.noteB.addEventListener("input", () => {
  state.boundaries.noteB = elements.noteB.value;
  invalidateCompletion("b");
  saveState();
  renderMetrics();
});

elements.diaryForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(elements.diaryForm);
  state.diary = [
    {
      id: uid(),
      date: String(formData.get("date")),
      type: String(formData.get("type")),
      actor: String(formData.get("actor")),
      mood: String(formData.get("mood")),
      warmth: Number(formData.get("warmth")),
      closeness: Number(formData.get("closeness")),
      pressure: Number(formData.get("pressure")),
      note: String(formData.get("note") || "").trim(),
      next: String(formData.get("next") || "").trim(),
    },
    ...state.diary,
  ];
  state.completed = { a: false, b: false };
  elements.diaryForm.reset();
  elements.diaryDate.valueAsDate = new Date();
  saveState();
  renderDiary();
  renderMetrics();
});

elements.diaryList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-delete-diary]");
  if (!button) {
    return;
  }

  state.diary = state.diary.filter((entry) => entry.id !== button.dataset.deleteDiary);
  state.completed = { a: false, b: false };
  saveState();
  renderDiary();
  renderMetrics();
});

elements.storyList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-story]");
  if (!button) {
    return;
  }

  state.story[button.dataset.story][button.dataset.person] = button.dataset.choice;
  invalidateCompletion(button.dataset.person);
  saveState();
  renderStories();
  renderMetrics();
});

elements.copyResult.addEventListener("click", async () => {
  if (!areBothCompleted()) {
    elements.shareText.value = "双方都标记完成后，才能复制关系画像。";
    return;
  }

  await copyText(elements.shareText.value);
  elements.copyResult.classList.add("copied");
  setTimeout(() => elements.copyResult.classList.remove("copied"), 900);
});

elements.resetAll.addEventListener("click", () => {
  state = createFreshState();
  saveState();
  elements.diaryDate.valueAsDate = new Date();
  renderAll();
});

elements.refreshQuestions.addEventListener("click", refreshQuestionSet);
elements.refreshSync.addEventListener("click", refreshSyncSet);
elements.refreshBoundary.addEventListener("click", refreshBoundarySet);
elements.refreshStories.addEventListener("click", refreshStorySet);

elements.completeA.addEventListener("click", () => markCompleted("a"));
elements.completeB.addEventListener("click", () => markCompleted("b"));
elements.copyForA.addEventListener("click", async () => {
  if (!areBothCompleted()) {
    return;
  }

  const metrics = computeMetrics();
  await copyText(buildShareText(metrics, classify(metrics), "a"));
});
elements.copyForB.addEventListener("click", async () => {
  if (!areBothCompleted()) {
    return;
  }

  const metrics = computeMetrics();
  await copyText(buildShareText(metrics, classify(metrics), "b"));
});

elements.diaryDate.valueAsDate = new Date();
renderAll();
