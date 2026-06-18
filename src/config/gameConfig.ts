import type { GameConfig } from '../types/game'

export const gameConfig: GameConfig = {
  title: '恋爱物语',
  initialResources: 100,
  maxActionsPerDay: 3,
  daysPerWeek: 7,
  maxAffinity: 100,
  minAffinity: -50,
  maxMood: 100,
  minMood: 0,
  moodDecayPerDay: 5,
  affinityDecayPerDay: 1,
  timeSlots: ['morning', 'afternoon', 'evening', 'night'],

  characters: [
    {
      id: 'linxiaoyu',
      name: '林小雨',
      avatar: '🌸',
      description: '温柔善良的图书馆管理员，喜欢读书和花草',
      personality: '温柔内向，有些害羞，但对喜欢的事物非常热情',
      favoriteGifts: ['flower', 'book', 'tea'],
      dislikedGifts: ['alcohol', 'game_console'],
      chatTopics: [
        { topic: '文学', affinity: 3 },
        { topic: '花草', affinity: 3 },
        { topic: '天气', affinity: 1 },
        { topic: '游戏', affinity: -1 },
        { topic: '运动', affinity: 0 }
      ],
      baseAffinity: 10,
      baseMood: 60,
      unlocked: true
    },
    {
      id: 'sufei',
      name: '苏菲',
      avatar: '🔥',
      description: '活泼开朗的咖啡馆女老板，热爱烘焙',
      personality: '热情外向，有点毒舌但内心温柔',
      favoriteGifts: ['coffee', 'dessert', 'game_console'],
      dislikedGifts: ['flower', 'book'],
      chatTopics: [
        { topic: '美食', affinity: 3 },
        { topic: '游戏', affinity: 3 },
        { topic: '天气', affinity: 1 },
        { topic: '文学', affinity: -1 },
        { topic: '运动', affinity: 2 }
      ],
      baseAffinity: 5,
      baseMood: 70,
      unlocked: true
    },
    {
      id: 'yeqing',
      name: '叶青',
      avatar: '🌙',
      description: '神秘的转学生，总是独来独往',
      personality: '冷静寡言，似乎藏着很多秘密',
      favoriteGifts: ['book', 'tea', 'music_box'],
      dislikedGifts: ['dessert', 'alcohol'],
      chatTopics: [
        { topic: '文学', affinity: 2 },
        { topic: '音乐', affinity: 3 },
        { topic: '天气', affinity: 0 },
        { topic: '游戏', affinity: 1 },
        { topic: '运动', affinity: -1 }
      ],
      baseAffinity: 0,
      baseMood: 50,
      unlocked: false,
      hidden: true,
      unlockCondition: 'unlock_yeqing'
    }
  ],

  gifts: [
    { id: 'flower', name: '鲜花', price: 30, icon: '🌹', description: '一束美丽的鲜花' },
    { id: 'book', name: '小说', price: 25, icon: '📚', description: '一本畅销小说' },
    { id: 'tea', name: '茶叶', price: 40, icon: '🍵', description: '上等的茶叶礼盒' },
    { id: 'coffee', name: '咖啡豆', price: 35, icon: '☕', description: '精品咖啡豆' },
    { id: 'dessert', name: '甜点', price: 20, icon: '🍰', description: '精致的手工甜点' },
    { id: 'game_console', name: '游戏机', price: 80, icon: '🎮', description: '最新款掌上游戏机' },
    { id: 'alcohol', name: '红酒', price: 60, icon: '🍷', description: '一瓶高档红酒' },
    { id: 'music_box', name: '音乐盒', price: 50, icon: '🎵', description: '精致的八音盒' }
  ],

  cards: [
    { id: 'linxiaoyu_common_1', name: '图书馆的邂逅', characterId: 'linxiaoyu', rarity: 'common', image: '📖', description: '第一次在图书馆见到小雨的场景', unlockCondition: 'meet_linxiaoyu' },
    { id: 'linxiaoyu_rare_1', name: '花田中', characterId: 'linxiaoyu', rarity: 'rare', image: '🌻', description: '小雨在花田中微笑的样子', unlockCondition: 'linxiaoyu_affinity_40' },
    { id: 'linxiaoyu_epic_1', name: '雨中伞', characterId: 'linxiaoyu', rarity: 'epic', image: '☂️', description: '一起在雨中撑伞回家', unlockCondition: 'linxiaoyu_affinity_70' },
    { id: 'linxiaoyu_legendary_1', name: '告白', characterId: 'linxiaoyu', rarity: 'legendary', image: '💝', description: '樱花树下的告白', unlockCondition: 'linxiaoyu_affinity_100' },
    { id: 'sufei_common_1', name: '咖啡馆的相遇', characterId: 'sufei', rarity: 'common', image: '☕', description: '第一次走进苏菲的咖啡馆', unlockCondition: 'meet_sufei' },
    { id: 'sufei_rare_1', name: '烘焙时光', characterId: 'sufei', rarity: 'rare', image: '🧁', description: '苏菲教你做蛋糕', unlockCondition: 'sufei_affinity_40' },
    { id: 'sufei_epic_1', name: '深夜游戏', characterId: 'sufei', rarity: 'epic', image: '🎮', description: '一起打游戏到深夜', unlockCondition: 'sufei_affinity_70' },
    { id: 'sufei_legendary_1', name: '夕阳下的吻', characterId: 'sufei', rarity: 'legendary', image: '🌅', description: '咖啡馆关门前的浪漫时刻', unlockCondition: 'sufei_affinity_100' },
    { id: 'yeqing_common_1', name: '月下身影', characterId: 'yeqing', rarity: 'common', image: '🌙', description: '月光下独自散步的叶青', unlockCondition: 'meet_yeqing' },
    { id: 'yeqing_rare_1', name: '琴音缭绕', characterId: 'yeqing', rarity: 'rare', image: '🎹', description: '叶青弹奏钢琴的样子', unlockCondition: 'yeqing_affinity_40' }
  ],

  events: [
    {
      id: 'intro_linxiaoyu',
      title: '图书馆的邂逅',
      description: '你在图书馆寻找一本书时，一位温柔的女生帮你找到了它。她叫林小雨，是这里的管理员。',
      characterId: 'linxiaoyu',
      triggerCondition: { minDay: 1, maxDay: 1, timeOfDay: 'morning' },
      choices: [
        {
          id: 'thankful',
          text: '道谢并和她聊聊天',
          effects: [{ characterId: 'linxiaoyu', affinityChange: 5, moodChange: 10 }],
          addCardId: 'linxiaoyu_common_1',
          delayedResults: [
            {
              daysAfter: 1,
              message: '🌼 小雨在图书馆看到你，微笑着向你挥了挥手，为你预留了窗边的座位。',
              type: 'story',
              characterId: 'linxiaoyu',
              effects: [{ characterId: 'linxiaoyu', affinityChange: 2, moodChange: 5 }]
            },
            {
              daysAfter: 3,
              message: '📚 小雨把一本她很喜欢的小说放在你常坐的位置上，夹着一张写着「希望你喜欢」的便签。',
              type: 'story',
              characterId: 'linxiaoyu',
              effects: [{ characterId: 'linxiaoyu', affinityChange: 3 }]
            }
          ]
        },
        {
          id: 'hurry',
          text: '道谢后匆匆离开',
          effects: [{ characterId: 'linxiaoyu', affinityChange: 2 }],
          delayedResults: [
            {
              daysAfter: 2,
              message: '📖 在图书馆偶遇小雨时，她只是礼貌地点了点头，似乎对你没什么特别的印象。',
              type: 'story',
              characterId: 'linxiaoyu'
            }
          ]
        }
      ],
      once: true,
      priority: 100
    },
    {
      id: 'intro_sufei',
      title: '咖啡馆的偶遇',
      description: '你走进一家新开的咖啡馆，热情的女老板苏菲立刻迎了上来。"欢迎光临！今天想来点什么？"',
      characterId: 'sufei',
      triggerCondition: { minDay: 1, maxDay: 2, timeOfDay: 'afternoon' },
      choices: [
        {
          id: 'coffee',
          text: '点一杯招牌咖啡',
          effects: [{ characterId: 'sufei', affinityChange: 5, moodChange: 10 }],
          resourceChange: -10,
          addCardId: 'sufei_common_1',
          delayedResults: [
            {
              daysAfter: 1,
              message: '☕ 路过咖啡馆时，苏菲远远地喊住你，说今天的豆子特别香，要请你尝尝。（好感提升）',
              type: 'story',
              characterId: 'sufei',
              effects: [{ characterId: 'sufei', affinityChange: 3, moodChange: 5 }]
            },
            {
              daysAfter: 4,
              message: '🎵 咖啡馆里传来你喜欢的音乐，苏菲笑着说「还记得你说过喜欢这首，特意加进歌单里了。」',
              type: 'story',
              characterId: 'sufei',
              effects: [{ characterId: 'sufei', affinityChange: 5, moodChange: 10 }]
            }
          ]
        },
        {
          id: 'dessert',
          text: '点一份甜点尝尝',
          effects: [{ characterId: 'sufei', affinityChange: 7, moodChange: 15 }],
          resourceChange: -20,
          delayedResults: [
            {
              daysAfter: 1,
              message: '🧁 苏菲特意把一份刚出炉的新口味蛋糕留给你，说「上次你说喜欢甜点，试试这个！」',
              type: 'story',
              characterId: 'sufei',
              effects: [{ characterId: 'sufei', affinityChange: 4, moodChange: 8 }],
              resourceChange: -15
            },
            {
              daysAfter: 3,
              message: '📝 苏菲拿着一个小本子跑来问你：「你觉得下次加什么口味的甜点好呀？」她认真地记下你说的每一条建议。',
              type: 'story',
              characterId: 'sufei',
              effects: [{ characterId: 'sufei', affinityChange: 3, moodChange: 5 }]
            }
          ]
        }
      ],
      once: true,
      priority: 99
    },
    {
      id: 'rainy_day_1',
      title: '突如其来的暴雨',
      description: '天空突然下起了大雨，你看到林小雨站在屋檐下，似乎没带伞。',
      characterId: 'linxiaoyu',
      triggerCondition: { minDay: 3, timeOfDay: 'evening', minAffinity: 20, characterId: 'linxiaoyu' },
      choices: [
        {
          id: 'share_umbrella',
          text: '把伞借给她',
          effects: [{ characterId: 'linxiaoyu', affinityChange: 15, moodChange: 20 }],
          delayedResults: [
            {
              daysAfter: 1,
              message: '☔ 小雨把伞叠得整整齐齐还给你，伞柄上还系着一条浅蓝色的丝带，她说「这是谢礼，不许拒绝。」',
              type: 'story',
              characterId: 'linxiaoyu',
              effects: [{ characterId: 'linxiaoyu', affinityChange: 5, moodChange: 5 }]
            },
            {
              daysAfter: 3,
              message: '🍵 小雨泡了一杯热茶给你，说「那天多亏了你，我才没有感冒。这是我自己做的花茶，尝尝看。」',
              type: 'story',
              characterId: 'linxiaoyu',
              effects: [{ characterId: 'linxiaoyu', affinityChange: 8, moodChange: 10 }]
            },
            {
              daysAfter: 5,
              message: '💌 你在书里发现了一张小雨夹的书签，背面写着「谢谢你，让我觉得下雨天也可以很温暖。」',
              type: 'story',
              characterId: 'linxiaoyu',
              effects: [{ characterId: 'linxiaoyu', affinityChange: 10 }]
            }
          ]
        },
        {
          id: 'wait_together',
          text: '陪她等雨停',
          effects: [{ characterId: 'linxiaoyu', affinityChange: 10, moodChange: 10 }],
          delayedResults: [
            {
              daysAfter: 1,
              message: '🌈 小雨发来一条消息，是昨天雨后彩虹的照片，她说「一起看过的彩虹，好像特别好看。」',
              type: 'story',
              characterId: 'linxiaoyu',
              effects: [{ characterId: 'linxiaoyu', affinityChange: 4, moodChange: 5 }]
            },
            {
              daysAfter: 4,
              message: '🎧 小雨分享了一首歌给你，「那天我们一起听的这首歌，现在听到就会想起那个雨天真好。」',
              type: 'story',
              characterId: 'linxiaoyu',
              effects: [{ characterId: 'linxiaoyu', affinityChange: 6 }]
            }
          ]
        },
        {
          id: 'leave',
          text: '假装没看到走开',
          effects: [{ characterId: 'linxiaoyu', affinityChange: -5, moodChange: -10 }],
          delayedResults: [
            {
              daysAfter: 1,
              message: '😔 第二天在图书馆遇到小雨，她微微低着头从你身边走过，肩膀似乎有些湿——她好像又淋雨了。',
              type: 'story',
              characterId: 'linxiaoyu',
              effects: [{ characterId: 'linxiaoyu', affinityChange: -3, moodChange: -5 }]
            },
            {
              daysAfter: 3,
              message: '🤧 听说小雨感冒请假了，图书馆的同事说「她那天淋了好久的雨...」你心里闪过一丝愧疚。',
              type: 'story',
              characterId: 'linxiaoyu',
              effects: [{ characterId: 'linxiaoyu', moodChange: -10 }]
            }
          ]
        }
      ],
      once: true,
      priority: 90
    },
    {
      id: 'cafe_late_night',
      title: '深夜咖啡馆',
      description: '你路过咖啡馆，发现灯还亮着。苏菲一个人在店里，看起来有些疲惫。',
      characterId: 'sufei',
      triggerCondition: { minDay: 5, timeOfDay: 'night', minAffinity: 30, characterId: 'sufei' },
      choices: [
        {
          id: 'help',
          text: '进去帮帮忙',
          effects: [{ characterId: 'sufei', affinityChange: 12, moodChange: 15 }],
          resourceChange: -5,
          delayedResults: [
            {
              daysAfter: 1,
              message: '💪 苏菲给你发了一张咖啡馆里挂着的「荣誉员工」小牌子的照片，说「这是给昨天最佳临时工的奖励！」',
              type: 'story',
              characterId: 'sufei',
              effects: [{ characterId: 'sufei', affinityChange: 5, moodChange: 5 }]
            },
            {
              daysAfter: 3,
              message: '🍰 咖啡馆推出了一款新甜点，菜单上写着名字是「那晚的星光」，苏菲神秘地说「灵感来自你。」',
              type: 'story',
              characterId: 'sufei',
              effects: [{ characterId: 'sufei', affinityChange: 8, moodChange: 10 }],
              resourceChange: 20
            },
            {
              daysAfter: 6,
              message: '🌙 苏菲把咖啡馆打烊时间的闹钟铃声换成了你们那晚一起听的歌，她说「这样关店的时候就不会觉得累了。」',
              type: 'story',
              characterId: 'sufei',
              effects: [{ characterId: 'sufei', affinityChange: 10 }]
            }
          ]
        },
        {
          id: 'company',
          text: '点杯咖啡陪陪她',
          effects: [{ characterId: 'sufei', affinityChange: 8, moodChange: 10 }],
          resourceChange: -15,
          delayedResults: [
            {
              daysAfter: 1,
              message: '☕ 你的「专属咖啡」被列在了菜单的隐藏选项里，只有你点单的时候苏菲才会露出自豪的笑容。',
              type: 'story',
              characterId: 'sufei',
              effects: [{ characterId: 'sufei', affinityChange: 4, moodChange: 5 }]
            },
            {
              daysAfter: 4,
              message: '🌃 苏菲说「自从那天你陪我熬夜后，我好像不再害怕一个人关店了。谢谢你愿意陪我。」',
              type: 'story',
              characterId: 'sufei',
              effects: [{ characterId: 'sufei', affinityChange: 7, moodChange: 8 }]
            }
          ]
        },
        {
          id: 'ignore',
          text: '不打扰她了',
          effects: [{ characterId: 'sufei', affinityChange: -3 }],
          delayedResults: [
            {
              daysAfter: 1,
              message: '🥱 第二天看到苏菲，她的眼下有淡淡的黑眼圈，笑着跟你说「最近有点忙呢...」声音里带着一丝疲惫。',
              type: 'story',
              characterId: 'sufei',
              effects: [{ characterId: 'sufei', moodChange: -5 }]
            },
            {
              daysAfter: 3,
              message: '😞 苏菲不小心在擦杯子的时候走神打碎了一个，她叹了口气，自言自语道「要是有人陪我聊聊天就好了...」',
              type: 'story',
              characterId: 'sufei',
              effects: [{ characterId: 'sufei', affinityChange: -2, moodChange: -3 }]
            }
          ]
        }
      ],
      once: true,
      priority: 85
    },
    {
      id: 'mysterious_girl',
      title: '神秘的转学生',
      description: '在公园的角落里，你看到一个安静的女生独自坐在长椅上。她似乎注意到了你，微微点了点头。',
      characterId: 'yeqing',
      triggerCondition: { minDay: 7, minAffinity: 40 },
      choices: [
        {
          id: 'approach',
          text: '上前打招呼',
          effects: [
            { characterId: 'yeqing', affinityChange: 5 },
            { characterId: 'linxiaoyu', affinityChange: -3 },
            { characterId: 'sufei', affinityChange: -3 }
          ],
          unlockCharacterId: 'yeqing',
          addCardId: 'yeqing_common_1',
          delayedResults: [
            {
              daysAfter: 1,
              message: '🌙 叶青在你常去的书店门口等你，她说「你上次说你喜欢这本书...我刚好有一本。」语气里带着一丝小心翼翼的期待。',
              type: 'story',
              characterId: 'yeqing',
              effects: [{ characterId: 'yeqing', affinityChange: 8, moodChange: 10 }]
            },
            {
              daysAfter: 3,
              message: '🎹 你在公园听到了一阵优美的钢琴声，走近发现叶青坐在长椅上弹着口风琴，看到你来了，她弹得更认真了。',
              type: 'story',
              characterId: 'yeqing',
              effects: [{ characterId: 'yeqing', affinityChange: 6, moodChange: 8 }]
            },
            {
              daysAfter: 5,
              message: '🍃 叶青把一片压在书里的银杏叶递给你，「这是我老家院子里的树...想和你分享。」她的耳朵微微发红。',
              type: 'story',
              characterId: 'yeqing',
              effects: [{ characterId: 'yeqing', affinityChange: 10, moodChange: 12 }]
            }
          ]
        },
        {
          id: 'leave_quietly',
          text: '悄悄离开',
          effects: [],
          delayedResults: [
            {
              daysAfter: 2,
              message: '🚶 在街角又一次看到那个安静的身影，她似乎也看到了你，但这次她只是低下头，默默走开了。',
              type: 'story',
              characterId: 'yeqing'
            },
            {
              daysAfter: 5,
              message: '💭 听朋友说，那个转学生总是一个人在公园坐到很晚...你心里闪过一丝如果当初打招呼的念头。',
              type: 'story'
            }
          ]
        }
      ],
      once: true,
      priority: 80
    },
    {
      id: 'birthday_surprise_1',
      title: '小雨的生日',
      description: '你想起今天是林小雨的生日，要准备什么惊喜吗？',
      characterId: 'linxiaoyu',
      triggerCondition: { minDay: 14, minAffinity: 50, characterId: 'linxiaoyu' },
      choices: [
        {
          id: 'big_surprise',
          text: '准备一个大惊喜',
          effects: [{ characterId: 'linxiaoyu', affinityChange: 25, moodChange: 30 }],
          resourceChange: -50,
          delayedResults: [
            {
              daysAfter: 1,
              message: '💖 小雨把你送的生日礼物照片设成了手机壁纸，被你看到时她慌张地把手机藏在身后，脸都红透了。',
              type: 'story',
              characterId: 'linxiaoyu',
              effects: [{ characterId: 'linxiaoyu', affinityChange: 8, moodChange: 10 }]
            },
            {
              daysAfter: 3,
              message: '🎂 小雨亲手做了一个生日蛋糕回赠给你，「这是我第一次做蛋糕给别人...你、你要全部吃完哦！」她紧张地看着你。',
              type: 'story',
              characterId: 'linxiaoyu',
              effects: [{ characterId: 'linxiaoyu', affinityChange: 12, moodChange: 15 }]
            },
            {
              daysAfter: 7,
              message: '📸 小雨提议一起去上次你布置惊喜的地方拍照，她说「这是我最难忘的一个生日，想留下更多回忆。」',
              type: 'story',
              characterId: 'linxiaoyu',
              effects: [{ characterId: 'linxiaoyu', affinityChange: 15, moodChange: 10 }]
            }
          ]
        },
        {
          id: 'small_gift',
          text: '送一个小礼物',
          effects: [{ characterId: 'linxiaoyu', affinityChange: 10, moodChange: 15 }],
          resourceChange: -20,
          delayedResults: [
            {
              daysAfter: 2,
              message: '🌸 小雨把你送的小礼物别在了书包上，看到你时她会下意识地摸一摸，嘴角不自觉上扬。',
              type: 'story',
              characterId: 'linxiaoyu',
              effects: [{ characterId: 'linxiaoyu', affinityChange: 5, moodChange: 5 }]
            },
            {
              daysAfter: 5,
              message: '📝 小雨写了一封感谢信给你，字里行间都能感受到她的开心，「礼物虽小，心意我收到了。谢谢你记得我的生日。」',
              type: 'story',
              characterId: 'linxiaoyu',
              effects: [{ characterId: 'linxiaoyu', affinityChange: 8, moodChange: 8 }]
            }
          ]
        },
        {
          id: 'forget',
          text: '算了，假装不知道',
          effects: [{ characterId: 'linxiaoyu', affinityChange: -10, moodChange: -20 }],
          delayedResults: [
            {
              daysAfter: 1,
              message: '🥀 你看到小雨的办公桌上放着一个无人问津的生日蛋糕，她一个人默默地吃着，看到你时迅速抹掉了眼角的什么。',
              type: 'story',
              characterId: 'linxiaoyu',
              effects: [{ characterId: 'linxiaoyu', affinityChange: -8, moodChange: -10 }]
            },
            {
              daysAfter: 3,
              message: '💔 最近小雨对你的态度变得很客气，礼貌地保持着距离，她说「抱歉最近有点忙...」你知道她其实很在意。',
              type: 'story',
              characterId: 'linxiaoyu',
              effects: [{ characterId: 'linxiaoyu', affinityChange: -5, moodChange: -8 }]
            },
            {
              daysAfter: 7,
              message: '😢 小雨的朋友悄悄告诉你，那天小雨等了一整天的消息，晚上还偷偷哭了很久。你的心像被什么揪了一下。',
              type: 'story',
              characterId: 'linxiaoyu',
              effects: [{ characterId: 'linxiaoyu', affinityChange: -10, moodChange: -15 }]
            }
          ]
        }
      ],
      once: true,
      priority: 95
    },
    {
      id: 'conflict_1',
      title: '两人的邀约',
      description: '林小雨和苏菲同时邀请你周末出去，你该怎么办？',
      triggerCondition: { minDay: 10, minAffinity: 35 },
      choices: [
        {
          id: 'choose_xiaoyu',
          text: '答应小雨',
          effects: [
            { characterId: 'linxiaoyu', affinityChange: 10, moodChange: 15 },
            { characterId: 'sufei', affinityChange: -8, moodChange: -10 }
          ],
          delayedResults: [
            {
              daysAfter: 1,
              message: '😊 小雨一整晚都在兴奋地规划周末行程，问你喜欢去植物园还是美术馆，眼睛亮晶晶的。',
              type: 'story',
              characterId: 'linxiaoyu',
              effects: [{ characterId: 'linxiaoyu', affinityChange: 5, moodChange: 10 }]
            },
            {
              daysAfter: 1,
              message: '😤 苏菲看到你时闷闷不乐，给你端咖啡时重重地把杯子放在桌上，「哼，有人玩得开心就好。」她小声嘀咕。',
              type: 'story',
              characterId: 'sufei',
              effects: [{ characterId: 'sufei', moodChange: -5 }]
            },
            {
              daysAfter: 4,
              message: '💐 周末和小雨约会后，她把一束从植物园摘的小野花送给你，「今天谢谢你...我很久没这么开心了。」她笑得特别甜。',
              type: 'story',
              characterId: 'linxiaoyu',
              effects: [{ characterId: 'linxiaoyu', affinityChange: 8, moodChange: 12 }]
            },
            {
              daysAfter: 5,
              message: '🍋 苏菲听说了你们约会的事，一连好几天都在你面前说「某些人呐，重色轻友。」虽然嘴上抱怨，但还是给你留了最喜欢的蛋糕。',
              type: 'story',
              characterId: 'sufei',
              effects: [{ characterId: 'sufei', affinityChange: 3, moodChange: 5 }]
            }
          ]
        },
        {
          id: 'choose_sufei',
          text: '答应苏菲',
          effects: [
            { characterId: 'sufei', affinityChange: 10, moodChange: 15 },
            { characterId: 'linxiaoyu', affinityChange: -8, moodChange: -10 }
          ],
          delayedResults: [
            {
              daysAfter: 1,
              message: '🎊 苏菲发来了十几条周末计划，从打电玩到逛夜市，「不许说不想去！我都安排好了！」她的文字都透着开心。',
              type: 'story',
              characterId: 'sufei',
              effects: [{ characterId: 'sufei', affinityChange: 5, moodChange: 10 }]
            },
            {
              daysAfter: 1,
              message: '😞 小雨在图书馆看到你时欲言又止，最后只是轻声说「周末...玩得开心点。」你看到她转身时肩膀微微垂了下来。',
              type: 'story',
              characterId: 'linxiaoyu',
              effects: [{ characterId: 'linxiaoyu', moodChange: -5 }]
            },
            {
              daysAfter: 4,
              message: '🎮 和苏菲疯玩了整个周末，她拉着你拍了好多搞怪合照，「这张要设成壁纸！不许删！」她霸道地说，但笑得像个孩子。',
              type: 'story',
              characterId: 'sufei',
              effects: [{ characterId: 'sufei', affinityChange: 8, moodChange: 12 }]
            },
            {
              daysAfter: 5,
              message: '☕ 小雨给你冲的茶比平时苦了一些，她低着头整理书架，「听说...你周末玩得很开心。」声音轻得像被风吹散。',
              type: 'story',
              characterId: 'linxiaoyu',
              effects: [{ characterId: 'linxiaoyu', affinityChange: -3, moodChange: -3 }]
            }
          ]
        },
        {
          id: 'reject_both',
          text: '都拒绝，说有事',
          effects: [
            { characterId: 'linxiaoyu', affinityChange: -3 },
            { characterId: 'sufei', affinityChange: -3 }
          ],
          delayedResults: [
            {
              daysAfter: 1,
              message: '🤔 小雨和苏菲在学校走廊里擦肩而过时，互相看了对方一眼，都陷入了沉思——难道她们被拒绝的原因是...对方？',
              type: 'story'
            },
            {
              daysAfter: 2,
              message: '❓ 两个人开始不约而同地对你旁敲侧击，问你「周末到底有什么事呀？」「是不是身体不舒服？」你感觉事情越来越复杂了。',
              type: 'story',
              effects: [
                { characterId: 'linxiaoyu', moodChange: -3 },
                { characterId: 'sufei', moodChange: -3 }
              ]
            }
          ]
        },
        {
          id: 'suggest_together',
          text: '建议三个人一起',
          effects: [
            { characterId: 'linxiaoyu', affinityChange: -2 },
            { characterId: 'sufei', affinityChange: -2 }
          ],
          delayedResults: [
            {
              daysAfter: 1,
              message: '😅 小雨和苏菲同时发来了消息：「三人行？认真的？」两个人的语气里都写满了「你在逗我吗」这四个字。',
              type: 'story'
            },
            {
              daysAfter: 3,
              message: '🍽️ 最后居然真的三人一起出游了！气氛尴尬中带着一丝微妙，小雨和苏菲表面上客气地微笑，暗地却在争夺走在你哪边的位置。',
              type: 'story',
              effects: [
                { characterId: 'linxiaoyu', affinityChange: 4, moodChange: 5 },
                { characterId: 'sufei', affinityChange: 4, moodChange: 5 }
              ]
            },
            {
              daysAfter: 5,
              message: '📸 苏菲给三人拍了合照，嘴上说着「留个纪念」，却偷偷把小雨的脸P歪了一点；小雨则把照片中苏菲的表情截掉做成了表情包。这友谊...挺有活力的。',
              type: 'story',
              effects: [
                { characterId: 'linxiaoyu', affinityChange: 3 },
                { characterId: 'sufei', affinityChange: 3 }
              ]
            }
          ]
        }
      ],
      once: true,
      priority: 88
    }
  ],

  actions: [
    { type: 'chat', name: '聊天', icon: '💬', description: '和角色聊聊天，增进感情', energyCost: 1 },
    { type: 'gift', name: '送礼', icon: '🎁', description: '送礼物给角色，效果因人而异', energyCost: 1 },
    { type: 'work', name: '打工', icon: '💼', description: '辛苦工作赚取代币', energyCost: 2 }
  ],

  workRewards: { min: 15, max: 35 }
}

export default gameConfig
