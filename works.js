// Shared selections for CH / JP; images copied unchanged from the main Portfolio
const X_POST_URL = "https://x.com/HANAOR1231/status/2003680293384020017?s=20";

// Localized text may use { ch, jp }; image, order and post URL remain shared
const WORKS = {
  "examColor": [
    {
      "title": "PARK",
      "category": "平面構成",
      "year": "2025/8",
      "image": "assets/color-composition/exam/01.jpeg",
      "material": {
        "ch": "丙烯颜料",
        "jp": "アクリル絵具"
      },
      "alt": {
        "ch": "PARK 平面構成作品",
        "jp": "PARKの平面構成作品"
      },
      "theme": {
        "ch": "PARK",
        "jp": "PARK"
      },
      "description": {
        "ch": "从公园这一主题中提取自然、游乐设施与人的活动等元素，将文字与图形结合进行平面構成\n把文字作为视觉母题而不只是信息，表现空间的延展与游玩的乐趣",
        "jp": "公園というテーマから、自然・遊具・人の動きなどの要素を抽出し、文字と図形を組み合わせて色彩構成を行った\n文字を単なる情報ではなく視覚的なモチーフとして扱い、空間の広がりや楽しさを表現した"
      }
    },
    {
      "title": "POISON",
      "category": "平面構成",
      "year": "2025/8",
      "image": "assets/color-composition/exam/03.jpeg",
      "material": {
        "ch": "丙烯颜料",
        "jp": "アクリル絵具"
      },
      "alt": {
        "ch": "POISON 平面構成作品",
        "jp": "POISONの平面構成作品"
      },
      "theme": {
        "ch": "毒",
        "jp": "毒"
      },
      "description": {
        "ch": "通过色彩表现毒所带来的危险感与不安，将生物性的意象与人工意象结合，尝试构成让观看者感到违和的画面",
        "jp": "毒が持つ危険性や不安感を色彩によって表現した\n生物的なイメージと人工的なイメージを組み合わせ、見る人に違和感を与える画面構成を試みた"
      }
    },
    {
      "title": "I MISS",
      "category": "平面構成",
      "year": "2025/9",
      "image": "assets/color-composition/exam/07.jpeg",
      "material": {
        "ch": "丙烯颜料",
        "jp": "アクリル絵具"
      },
      "alt": {
        "ch": "I MISS 平面構成作品",
        "jp": "I MISSの平面構成作品"
      },
      "theme": {
        "ch": "I MISS",
        "jp": "I MISS"
      },
      "description": {
        "ch": "将给定的文字作为母题，通过平面構成表现“令人怀念的记忆”，尝试将模糊的记忆以及随时间推移而变化的情绪视觉化",
        "jp": "与えられた文字をモチーフとして扱い、「懐かしい記憶」というテーマを色彩構成で表現した\n曖昧な記憶や時間の経過による感情の変化を視覚化することを試みた"
      }
    },
    {
      "title": "PICTURE",
      "category": "平面構成",
      "year": "2025/10",
      "image": "assets/color-composition/exam/10.jpeg",
      "material": {
        "ch": "丙烯颜料",
        "jp": "アクリル絵具"
      },
      "alt": {
        "ch": "PICTURE 平面構成作品",
        "jp": "PICTUREの平面構成作品"
      },
      "theme": {
        "ch": "风景",
        "jp": "風景"
      },
      "description": {
        "ch": "将风景带来的印象抽象化，以色面与形态重新构成\n不直接再现具体景色，而是表现留在记忆与感官中的风景印象",
        "jp": "風景から得られる印象を抽象化し、色面と形態によって再構成した\n具体的な景色の再現ではなく、記憶や感覚として残る風景の印象を表現した"
      }
    }
  ],
  "universityColor": [
    {
      "title": {
        "ch": "自画像中的平面構成｜低彩度",
        "jp": "自画像における色彩構成｜低彩度"
      },
      "category": "平面構成",
      "image": "assets/color-composition/university/01.jpeg",
      "alt": {
        "ch": "自画像中的平面構成｜低彩度",
        "jp": "自画像における色彩構成｜低彩度"
      },
      "description": {
        "ch": "以低彩度的配色与单色表现，呈现如噪点般的模糊感",
        "jp": "低彩度の色彩とモノクローム表現によって、ノイズのような曖昧さを表現した"
      }
    },
    {
      "title": {
        "ch": "自画像中的平面構成｜高彩度",
        "jp": "自画像における色彩構成｜高彩度"
      },
      "category": "平面構成",
      "image": "assets/color-composition/university/02.jpeg",
      "alt": {
        "ch": "自画像中的平面構成｜高彩度",
        "jp": "自画像における色彩構成｜高彩度"
      },
      "description": {
        "ch": "以高彩度配色表现强烈的刺激与能量",
        "jp": "高彩度の配色による強い刺激とエネルギーを表現した"
      }
    },
    {
      "title": {
        "ch": "ADHD 思考过程可视化｜気抜け",
        "jp": "ADHDの思考過程可視化｜気抜け"
      },
      "category": "平面構成",
      "image": "assets/color-composition/university/adhd-01.jpeg",
      "alt": {
        "ch": "ADHD 思考过程可视化｜気抜け",
        "jp": "ADHDの思考過程可視化｜気抜け"
      },
      "description": {
        "ch": "",
        "jp": ""
      }
    },
    {
      "title": {
        "ch": "ADHD 思考过程可视化｜目離れ",
        "jp": "ADHDの思考過程可視化｜目離れ"
      },
      "category": "平面構成",
      "image": "assets/color-composition/university/adhd-03.jpeg",
      "alt": {
        "ch": "ADHD 思考过程可视化｜目離れ",
        "jp": "ADHDの思考過程可視化｜目離れ"
      },
      "description": {
        "ch": "",
        "jp": ""
      }
    }
  ],
  "dessin": [
    {
      "title": "デッサン 12",
      "category": "デッサン",
      "year": "2026/02",
      "duration": "6h",
      "image": "assets/dessin/12.jpeg",
      "alt": {
        "ch": "デッサン 12",
        "jp": "デッサン 12"
      },
      "description": "藝大サイズ"
    },
    {
      "title": "デッサン 04",
      "category": "デッサン",
      "year": "2025/7",
      "duration": "5h",
      "image": "assets/dessin/04.jpeg",
      "alt": {
        "ch": "デッサン 04",
        "jp": "デッサン 04"
      },
      "description": "B3"
    },
    {
      "title": "デッサン 07",
      "category": "デッサン",
      "year": "2025/8",
      "duration": "3h",
      "image": "assets/dessin/07.jpeg",
      "alt": {
        "ch": "デッサン 07",
        "jp": "デッサン 07"
      },
      "description": "B3"
    },
    {
      "title": "デッサン 03",
      "category": "デッサン",
      "year": "2025/7",
      "duration": "5h",
      "image": "assets/dessin/03.jpeg",
      "alt": {
        "ch": "デッサン 03",
        "jp": "デッサン 03"
      },
      "description": "B3"
    }
  ],
  "entranceExam": [
    {
      "title": "くしゃくしゃにしたものを持つ手",
      "category": "入試再現",
      "year": "2026/05",
      "duration": "3h",
      "image": "assets/entrance-exam/13.jpeg",
      "alt": {
        "ch": "くしゃくしゃにしたものを持つ手",
        "jp": "くしゃくしゃにしたものを持つ手"
      },
      "description": "B3",
      "theme": "くしゃくしゃにしたものを持つ手"
    }
  ]
};

// Development placeholders appear only while a list is empty.
const PLACEHOLDERS = {
  examColor: { label: "EXAM COLOR WORK", count: 4 },
  universityColor: { label: "UNIVERSITY COLOR WORK", count: 4 },
  dessin: { label: "DESSIN", count: 4 },
  entranceExam: { label: "ENTRANCE EXAM WORK", count: 2 }
};
