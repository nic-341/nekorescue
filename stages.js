window.NEKO_STAGES = [
  {
    "id": 1,
    "title": "はじめてのひとっ飛び",
    "theme": "garden",
    "hint": "金色のピンをタップしてみよう。",
    "cat": {
      "x": 210,
      "y": 194
    },
    "goal": {
      "x": 210,
      "y": 470
    },
    "route": [
      {
        "x": 210,
        "y": 465
      }
    ],
    "entities": [],
    "actions": [
      {
        "id": "cat",
        "type": "pin",
        "x": 110,
        "y": 225,
        "w": 200,
        "effect": "releaseCat",
        "label": "猫の下のピンを抜く"
      }
    ]
  },
  {
    "id": 2,
    "title": "あつあつ、ひんやり",
    "theme": "cave",
    "hint": "青い水を先に流して、火が消えてから猫のピンを抜こう。",
    "cat": {
      "x": 125,
      "y": 194
    },
    "goal": {
      "x": 125,
      "y": 470
    },
    "route": [
      {
        "x": 125,
        "y": 465
      }
    ],
    "entities": [
      {
        "id": "water",
        "type": "water",
        "x": 290,
        "y": 140,
        "w": 100,
        "h": 80,
        "target": "fire"
      },
      {
        "id": "fire",
        "type": "fire",
        "x": 125,
        "y": 445
      }
    ],
    "actions": [
      {
        "id": "waterPin",
        "type": "pin",
        "x": 240,
        "y": 225,
        "w": 115,
        "effect": "water",
        "source": "water",
        "label": "水のピンを抜く"
      },
      {
        "id": "cat",
        "type": "pin",
        "x": 45,
        "y": 225,
        "w": 160,
        "effect": "releaseCat",
        "label": "猫の下のピンを抜く"
      }
    ]
  },
  {
    "id": 3,
    "title": "ネズミさん、通して！",
    "theme": "workshop",
    "hint": "岩を落としてネズミを追い払ってから、猫を降ろそう。",
    "cat": {
      "x": 115,
      "y": 194
    },
    "goal": {
      "x": 310,
      "y": 470
    },
    "route": [
      {
        "x": 115,
        "y": 455
      },
      {
        "x": 310,
        "y": 465
      }
    ],
    "entities": [
      {
        "id": "rock",
        "type": "rock",
        "x": 250,
        "y": 180,
        "target": "mouse",
        "landing": {
          "x": 250,
          "y": 455
        }
      },
      {
        "id": "mouse",
        "type": "mouse",
        "x": 250,
        "y": 455
      }
    ],
    "actions": [
      {
        "id": "rockPin",
        "type": "pin",
        "x": 205,
        "y": 210,
        "w": 115,
        "effect": "drop",
        "source": "rock",
        "label": "岩のピンを抜く"
      },
      {
        "id": "cat",
        "type": "pin",
        "x": 45,
        "y": 225,
        "w": 135,
        "effect": "releaseCat",
        "label": "猫の下のピンを抜く"
      }
    ]
  },
  {
    "id": 4,
    "title": "箱でつなぐ帰り道",
    "theme": "attic",
    "hint": "ロープをタップして切ると箱が橋になる。そのあと緑のスイッチ！",
    "cat": {
      "x": 70,
      "y": 395
    },
    "goal": {
      "x": 355,
      "y": 400
    },
    "route": [
      {
        "x": 355,
        "y": 395
      }
    ],
    "entities": [
      {
        "id": "gap",
        "type": "gap",
        "x": 150,
        "y": 425,
        "w": 145
      },
      {
        "id": "box",
        "type": "box",
        "x": 222,
        "y": 180,
        "landing": {
          "x": 222,
          "y": 463
        },
        "target": "gap"
      }
    ],
    "actions": [
      {
        "id": "rope",
        "type": "rope",
        "x": 222,
        "y": 70,
        "w": 0,
        "h": 85,
        "effect": "drop",
        "source": "box",
        "label": "箱を吊るロープを切る"
      },
      {
        "id": "cat",
        "type": "switch",
        "x": 62,
        "y": 430,
        "w": 48,
        "effect": "releaseCat",
        "label": "猫を進ませるスイッチ"
      }
    ]
  },
  {
    "id": 5,
    "title": "水と岩の合わせ技",
    "theme": "ruins",
    "hint": "①水で火を消す ②岩でネズミを追い払う ③猫を降ろす。",
    "cat": {
      "x": 85,
      "y": 194
    },
    "goal": {
      "x": 345,
      "y": 470
    },
    "route": [
      {
        "x": 85,
        "y": 455
      },
      {
        "x": 345,
        "y": 465
      }
    ],
    "entities": [
      {
        "id": "water",
        "type": "water",
        "x": 205,
        "y": 120,
        "w": 90,
        "h": 85,
        "target": "fire"
      },
      {
        "id": "fire",
        "type": "fire",
        "x": 85,
        "y": 445
      },
      {
        "id": "rock",
        "type": "rock",
        "x": 325,
        "y": 196,
        "target": "mouse",
        "landing": {
          "x": 265,
          "y": 455
        },
        "requiresClear": "fire"
      },
      {
        "id": "mouse",
        "type": "mouse",
        "x": 265,
        "y": 455
      }
    ],
    "actions": [
      {
        "id": "waterPin",
        "type": "pin",
        "x": 157,
        "y": 210,
        "w": 105,
        "effect": "water",
        "source": "water",
        "label": "水のピンを抜く"
      },
      {
        "id": "rockPin",
        "type": "pin",
        "x": 280,
        "y": 225,
        "w": 105,
        "effect": "drop",
        "source": "rock",
        "label": "岩のピンを抜く"
      },
      {
        "id": "cat",
        "type": "pin",
        "x": 25,
        "y": 225,
        "w": 115,
        "effect": "releaseCat",
        "label": "猫の下のピンを抜く"
      }
    ]
  },
  {
    "id": 6,
    "title": "ふたつの火、ふたつの水",
    "theme": "cave",
    "hint": "左右の水は別々の火へ流れる。両方消してから猫を降ろそう。",
    "cat": {
      "x": 85,
      "y": 194
    },
    "goal": {
      "x": 350,
      "y": 470
    },
    "route": [
      {
        "x": 85,
        "y": 465
      },
      {
        "x": 245,
        "y": 465
      },
      {
        "x": 350,
        "y": 465
      }
    ],
    "entities": [
      {
        "id": "waterA",
        "type": "water",
        "x": 200,
        "y": 100,
        "w": 85,
        "h": 90,
        "target": "fireA"
      },
      {
        "id": "waterB",
        "type": "water",
        "x": 320,
        "y": 110,
        "w": 85,
        "h": 90,
        "target": "fireB"
      },
      {
        "id": "fireA",
        "type": "fire",
        "x": 85,
        "y": 445
      },
      {
        "id": "fireB",
        "type": "fire",
        "x": 245,
        "y": 445
      }
    ],
    "actions": [
      {
        "id": "waterA",
        "type": "pin",
        "x": 155,
        "y": 195,
        "w": 90,
        "effect": "water",
        "source": "waterA",
        "label": "左の水のピンを抜く"
      },
      {
        "id": "waterB",
        "type": "pin",
        "x": 275,
        "y": 210,
        "w": 90,
        "effect": "water",
        "source": "waterB",
        "label": "右の水のピンを抜く"
      },
      {
        "id": "cat",
        "type": "pin",
        "x": 25,
        "y": 225,
        "w": 110,
        "effect": "releaseCat",
        "label": "猫のピンを抜く"
      }
    ]
  },
  {
    "id": 7,
    "title": "岩にも橋が必要",
    "theme": "attic",
    "floor": 425,
    "hint": "箱の橋を先に作ろう。岩は橋に落ちて転がり、ネズミを追い払う。",
    "cat": {
      "x": 70,
      "y": 395
    },
    "goal": {
      "x": 355,
      "y": 400
    },
    "route": [
      {
        "x": 355,
        "y": 395
      }
    ],
    "entities": [
      {
        "id": "gap",
        "type": "gap",
        "x": 155,
        "y": 425,
        "w": 130
      },
      {
        "id": "box",
        "type": "box",
        "x": 220,
        "y": 175,
        "landing": {
          "x": 220,
          "y": 463
        },
        "target": "gap"
      },
      {
        "id": "rock",
        "type": "rock",
        "x": 100,
        "y": 305,
        "landing": {
          "x": 220,
          "y": 395
        },
        "target": "mouse",
        "requiresBridge": "gap"
      },
      {
        "id": "mouse",
        "type": "mouse",
        "x": 325,
        "y": 395
      }
    ],
    "actions": [
      {
        "id": "rope",
        "type": "rope",
        "x": 220,
        "y": 65,
        "w": 0,
        "h": 75,
        "effect": "drop",
        "source": "box",
        "label": "箱のロープを切る"
      },
      {
        "id": "rockPin",
        "type": "pin",
        "x": 45,
        "y": 337,
        "w": 105,
        "effect": "drop",
        "source": "rock",
        "label": "岩のピンを抜く"
      },
      {
        "id": "cat",
        "type": "switch",
        "x": 55,
        "y": 445,
        "w": 48,
        "effect": "releaseCat",
        "label": "猫を進める"
      }
    ]
  },
  {
    "id": 8,
    "title": "水の行き先を考えよう",
    "theme": "workshop",
    "hint": "オレンジの切替スイッチで水路を火へ向ける。そのあと水のピン、最後に猫。",
    "cat": {
      "x": 100,
      "y": 194
    },
    "goal": {
      "x": 100,
      "y": 470
    },
    "route": [
      {
        "x": 100,
        "y": 465
      }
    ],
    "entities": [
      {
        "id": "water",
        "type": "water",
        "x": 280,
        "y": 100,
        "w": 100,
        "h": 100,
        "target": "drain"
      },
      {
        "id": "fire",
        "type": "fire",
        "x": 100,
        "y": 445
      },
      {
        "id": "drain",
        "type": "drain",
        "x": 330,
        "y": 445
      },
      {
        "id": "valve",
        "type": "valve",
        "x": 280,
        "y": 310,
        "source": "water",
        "choices": [
          "drain",
          "fire"
        ]
      }
    ],
    "actions": [
      {
        "id": "waterPin",
        "type": "pin",
        "x": 225,
        "y": 205,
        "w": 115,
        "effect": "water",
        "source": "water",
        "label": "水のピンを抜く"
      },
      {
        "id": "valve",
        "type": "switch",
        "x": 260,
        "y": 315,
        "w": 48,
        "effect": "redirect",
        "source": "valve",
        "label": "水路を切り替える"
      },
      {
        "id": "cat",
        "type": "pin",
        "x": 30,
        "y": 225,
        "w": 140,
        "effect": "releaseCat",
        "label": "猫のピンを抜く"
      }
    ]
  },
  {
    "id": 9,
    "title": "燃えない橋の作り方",
    "theme": "ruins",
    "floor": 425,
    "hint": "箱の下には火！ 水で消してからロープを切り、最後に猫のピンを抜こう。",
    "cat": {
      "x": 80,
      "y": 194
    },
    "goal": {
      "x": 350,
      "y": 400
    },
    "route": [
      {
        "x": 80,
        "y": 395
      },
      {
        "x": 350,
        "y": 395
      }
    ],
    "entities": [
      {
        "id": "gap",
        "type": "gap",
        "x": 155,
        "y": 425,
        "w": 130
      },
      {
        "id": "box",
        "type": "box",
        "x": 220,
        "y": 290,
        "landing": {
          "x": 220,
          "y": 463
        },
        "target": "gap",
        "requiresClear": "fire"
      },
      {
        "id": "water",
        "type": "water",
        "x": 310,
        "y": 100,
        "w": 90,
        "h": 90,
        "target": "fire"
      },
      {
        "id": "fire",
        "type": "fire",
        "x": 220,
        "y": 395
      }
    ],
    "actions": [
      {
        "id": "waterPin",
        "type": "pin",
        "x": 260,
        "y": 195,
        "w": 100,
        "effect": "water",
        "source": "water",
        "label": "水のピンを抜く"
      },
      {
        "id": "rope",
        "type": "rope",
        "x": 220,
        "y": 150,
        "w": 0,
        "h": 100,
        "effect": "drop",
        "source": "box",
        "label": "箱のロープを切る"
      },
      {
        "id": "cat",
        "type": "pin",
        "x": 25,
        "y": 225,
        "w": 110,
        "effect": "releaseCat",
        "label": "猫のピンを抜く"
      }
    ]
  },
  {
    "id": 10,
    "title": "レスキュー隊、総仕上げ！",
    "theme": "workshop",
    "floor": 425,
    "hint": "水路を火へ切替→2つの水で消火→箱の橋→岩でネズミ退散→猫！",
    "cat": {
      "x": 70,
      "y": 194
    },
    "goal": {
      "x": 355,
      "y": 400
    },
    "route": [
      {
        "x": 70,
        "y": 395
      },
      {
        "x": 355,
        "y": 395
      }
    ],
    "entities": [
      {
        "id": "gap",
        "type": "gap",
        "x": 155,
        "y": 425,
        "w": 130
      },
      {
        "id": "waterA",
        "type": "water",
        "x": 185,
        "y": 90,
        "w": 75,
        "h": 80,
        "target": "fireA"
      },
      {
        "id": "waterB",
        "type": "water",
        "x": 315,
        "y": 90,
        "w": 75,
        "h": 80,
        "target": "drain"
      },
      {
        "id": "fireA",
        "type": "fire",
        "x": 70,
        "y": 395
      },
      {
        "id": "fireB",
        "type": "fire",
        "x": 220,
        "y": 395
      },
      {
        "id": "drain",
        "type": "drain",
        "x": 380,
        "y": 380
      },
      {
        "id": "valve",
        "type": "valve",
        "x": 315,
        "y": 250,
        "source": "waterB",
        "choices": [
          "drain",
          "fireB"
        ]
      },
      {
        "id": "box",
        "type": "box",
        "x": 220,
        "y": 270,
        "landing": {
          "x": 220,
          "y": 463
        },
        "target": "gap",
        "requiresClear": "fireB"
      },
      {
        "id": "rock",
        "type": "rock",
        "x": 325,
        "y": 315,
        "landing": {
          "x": 220,
          "y": 395
        },
        "target": "mouse",
        "requiresBridge": "gap"
      },
      {
        "id": "mouse",
        "type": "mouse",
        "x": 325,
        "y": 395
      }
    ],
    "actions": [
      {
        "id": "waterA",
        "type": "pin",
        "x": 145,
        "y": 175,
        "w": 80,
        "effect": "water",
        "source": "waterA",
        "label": "左の水のピンを抜く"
      },
      {
        "id": "waterB",
        "type": "pin",
        "x": 275,
        "y": 175,
        "w": 80,
        "effect": "water",
        "source": "waterB",
        "label": "右の水のピンを抜く"
      },
      {
        "id": "valve",
        "type": "switch",
        "x": 295,
        "y": 255,
        "w": 48,
        "effect": "redirect",
        "source": "valve",
        "label": "右の水路を切り替える"
      },
      {
        "id": "rope",
        "type": "rope",
        "x": 220,
        "y": 200,
        "w": 0,
        "h": 44,
        "effect": "drop",
        "source": "box",
        "label": "箱のロープを切る"
      },
      {
        "id": "rockPin",
        "type": "pin",
        "x": 275,
        "y": 347,
        "w": 100,
        "effect": "drop",
        "source": "rock",
        "label": "岩のピンを抜く"
      },
      {
        "id": "cat",
        "type": "pin",
        "x": 20,
        "y": 225,
        "w": 110,
        "effect": "releaseCat",
        "label": "猫のピンを抜く"
      }
    ]
  },
  {
    "id": 11,
    "title": "水は一回きり",
    "theme": "cave",
    "hint": "岩で左の火をふさぐ→水路を右の火へ→水を流す→猫。水で左を消すと右の火が残る！",
    "cat": {
      "x": 75,
      "y": 194
    },
    "goal": {
      "x": 350,
      "y": 470
    },
    "route": [
      {
        "x": 75,
        "y": 465
      },
      {
        "x": 250,
        "y": 465
      },
      {
        "x": 350,
        "y": 465
      }
    ],
    "entities": [
      {
        "id": "fireA",
        "type": "fire",
        "x": 75,
        "y": 445
      },
      {
        "id": "fireB",
        "type": "fire",
        "x": 250,
        "y": 445
      },
      {
        "id": "rock",
        "type": "rock",
        "x": 75,
        "y": 320,
        "landing": {
          "x": 75,
          "y": 455
        },
        "target": "fireA",
        "seal": true
      },
      {
        "id": "water",
        "type": "water",
        "x": 295,
        "y": 95,
        "w": 100,
        "h": 85,
        "target": "fireA"
      },
      {
        "id": "valve",
        "type": "valve",
        "x": 295,
        "y": 300,
        "source": "water",
        "choices": [
          "fireA",
          "fireB"
        ]
      }
    ],
    "actions": [
      {
        "id": "cat",
        "type": "pin",
        "x": 20,
        "y": 225,
        "w": 110,
        "effect": "releaseCat",
        "label": "猫のピンを抜く"
      },
      {
        "id": "rockPin",
        "type": "pin",
        "x": 25,
        "y": 350,
        "w": 105,
        "effect": "drop",
        "source": "rock",
        "label": "岩のピンを抜く"
      },
      {
        "id": "waterPin",
        "type": "pin",
        "x": 240,
        "y": 185,
        "w": 115,
        "effect": "water",
        "source": "water",
        "label": "一回分の水を流す"
      },
      {
        "id": "valve",
        "type": "switch",
        "x": 275,
        "y": 305,
        "w": 48,
        "effect": "redirect",
        "source": "valve",
        "repeatable": true,
        "label": "水路を左右に切り替える"
      }
    ]
  },
  {
    "id": 12,
    "title": "開けたら、閉めよう",
    "theme": "workshop",
    "hint": "床のハッチを開く→岩でネズミ退散→ハッチを閉じる→猫。開けっぱなしは猫も落ちる！",
    "cat": {
      "x": 75,
      "y": 194
    },
    "goal": {
      "x": 370,
      "y": 470
    },
    "route": [
      {
        "x": 75,
        "y": 465
      },
      {
        "x": 370,
        "y": 465
      }
    ],
    "entities": [
      {
        "id": "rock",
        "type": "rock",
        "x": 225,
        "y": 180,
        "landing": {
          "x": 225,
          "y": 455
        },
        "target": "mouse",
        "exitGap": "hatch"
      },
      {
        "id": "mouse",
        "type": "mouse",
        "x": 225,
        "y": 455
      },
      {
        "id": "hatch",
        "type": "gap",
        "x": 295,
        "y": 495,
        "w": 55,
        "active": false,
        "trap": true
      }
    ],
    "actions": [
      {
        "id": "cat",
        "type": "pin",
        "x": 20,
        "y": 225,
        "w": 110,
        "effect": "releaseCat",
        "label": "猫のピンを抜く"
      },
      {
        "id": "rockPin",
        "type": "pin",
        "x": 175,
        "y": 210,
        "w": 100,
        "effect": "drop",
        "source": "rock",
        "label": "岩のピンを抜く"
      },
      {
        "id": "hatch",
        "type": "switch",
        "x": 290,
        "y": 335,
        "w": 48,
        "effect": "hatch",
        "source": "hatch",
        "repeatable": true,
        "label": "床のハッチを開閉する"
      }
    ]
  },
  {
    "id": 13,
    "title": "落ちる前に、ひと休み",
    "theme": "attic",
    "floor": 425,
    "hint": "猫を待機場所へ→岩を落とす（右へ転がって消火）→箱の橋→出発。岩の落下地点から先に猫を避難させよう。",
    "cat": {
      "x": 75,
      "y": 395
    },
    "goal": {
      "x": 355,
      "y": 400
    },
    "route": [
      {
        "x": 355,
        "y": 395
      }
    ],
    "entities": [
      {
        "id": "gap",
        "type": "gap",
        "x": 170,
        "y": 425,
        "w": 130
      },
      {
        "id": "fire",
        "type": "fire",
        "x": 235,
        "y": 395
      },
      {
        "id": "rock",
        "type": "rock",
        "x": 75,
        "y": 180,
        "landing": {
          "x": 75,
          "y": 395
        },
        "target": "fire",
        "seal": true,
        "catDanger": true
      },
      {
        "id": "box",
        "type": "box",
        "x": 235,
        "y": 250,
        "landing": {
          "x": 235,
          "y": 463
        },
        "target": "gap",
        "requiresClear": "fire"
      }
    ],
    "actions": [
      {
        "id": "evacuate",
        "type": "switch",
        "x": 45,
        "y": 450,
        "w": 48,
        "effect": "releaseCat",
        "route": [
          {
            "x": 130,
            "y": 395
          }
        ],
        "pause": true,
        "label": "猫を待機場所へ移す"
      },
      {
        "id": "rockPin",
        "type": "pin",
        "x": 25,
        "y": 210,
        "w": 105,
        "effect": "drop",
        "source": "rock",
        "label": "岩のピンを抜く"
      },
      {
        "id": "rope",
        "type": "rope",
        "x": 235,
        "y": 105,
        "w": 0,
        "h": 105,
        "effect": "drop",
        "source": "box",
        "label": "箱のロープを切る"
      },
      {
        "id": "cat",
        "type": "switch",
        "x": 320,
        "y": 450,
        "w": 48,
        "effect": "releaseCat",
        "label": "猫をゴールへ送る"
      }
    ]
  },
  {
    "id": 14,
    "title": "橋に使う？ 消火に使う？",
    "theme": "ruins",
    "floor": 425,
    "hint": "水は右の火に使う。左の火は岩でふさぐ。消火したら箱の橋を作る。",
    "cat": {
      "x": 75,
      "y": 194
    },
    "goal": {
      "x": 355,
      "y": 400
    },
    "route": [
      {
        "x": 75,
        "y": 395
      },
      {
        "x": 355,
        "y": 395
      }
    ],
    "entities": [
      {
        "id": "gap",
        "type": "gap",
        "x": 170,
        "y": 425,
        "w": 130
      },
      {
        "id": "fireA",
        "type": "fire",
        "x": 75,
        "y": 395
      },
      {
        "id": "fireB",
        "type": "fire",
        "x": 235,
        "y": 395
      },
      {
        "id": "rock",
        "type": "rock",
        "x": 75,
        "y": 310,
        "landing": {
          "x": 75,
          "y": 395
        },
        "target": "fireA",
        "seal": true
      },
      {
        "id": "water",
        "type": "water",
        "x": 310,
        "y": 90,
        "w": 85,
        "h": 85,
        "target": "fireA"
      },
      {
        "id": "valve",
        "type": "valve",
        "x": 315,
        "y": 280,
        "source": "water",
        "choices": [
          "fireA",
          "fireB"
        ]
      },
      {
        "id": "box",
        "type": "box",
        "x": 235,
        "y": 280,
        "landing": {
          "x": 235,
          "y": 463
        },
        "target": "gap",
        "requiresClear": "fireB"
      }
    ],
    "actions": [
      {
        "id": "cat",
        "type": "pin",
        "x": 20,
        "y": 225,
        "w": 110,
        "effect": "releaseCat",
        "label": "猫のピンを抜く"
      },
      {
        "id": "rockPin",
        "type": "pin",
        "x": 25,
        "y": 340,
        "w": 105,
        "effect": "drop",
        "source": "rock",
        "label": "岩のピンを抜く"
      },
      {
        "id": "waterPin",
        "type": "pin",
        "x": 265,
        "y": 180,
        "w": 95,
        "effect": "water",
        "source": "water",
        "label": "一回分の水を流す"
      },
      {
        "id": "valve",
        "type": "switch",
        "x": 295,
        "y": 285,
        "w": 48,
        "effect": "redirect",
        "source": "valve",
        "repeatable": true,
        "label": "水路を左右に切り替える"
      },
      {
        "id": "rope",
        "type": "rope",
        "x": 235,
        "y": 90,
        "w": 0,
        "h": 150,
        "effect": "drop",
        "source": "box",
        "label": "箱のロープを切る"
      }
    ]
  },
  {
    "id": 15,
    "title": "往復する水路の謎",
    "theme": "workshop",
    "floor": 425,
    "hint": "青い水路の先に水が流れる。上下の水で左右の火を一つずつ消す→猫を足場スイッチへ→箱の橋→ゴール。",
    "cat": {
      "x": 75,
      "y": 194
    },
    "goal": {
      "x": 355,
      "y": 400
    },
    "route": [
      {
        "x": 355,
        "y": 395
      }
    ],
    "entities": [
      {
        "id": "gap",
        "type": "gap",
        "x": 170,
        "y": 425,
        "w": 130
      },
      {
        "id": "fireA",
        "type": "fire",
        "x": 75,
        "y": 395
      },
      {
        "id": "fireB",
        "type": "fire",
        "x": 235,
        "y": 395
      },
      {
        "id": "water",
        "type": "water",
        "x": 315,
        "y": 75,
        "w": 85,
        "h": 65,
        "target": "fireA",
        "label": "上の水"
      },
      {
        "id": "water2",
        "type": "water",
        "x": 315,
        "y": 175,
        "w": 85,
        "h": 65,
        "target": "fireA",
        "label": "下の水"
      },
      {
        "id": "valve",
        "type": "valve",
        "x": 315,
        "y": 285,
        "source": "water",
        "linked": [
          "water2"
        ],
        "choices": [
          "fireA",
          "fireB"
        ]
      },
      {
        "id": "box",
        "type": "box",
        "x": 235,
        "y": 285,
        "landing": {
          "x": 235,
          "y": 463
        },
        "target": "gap",
        "requiresClear": "fireB",
        "requiresPad": {
          "x": 130,
          "y": 395
        }
      },
      {
        "id": "pad",
        "type": "pad",
        "x": 130,
        "y": 425,
        "caption": "箱の止め具"
      }
    ],
    "actions": [
      {
        "id": "waterPin",
        "type": "pin",
        "x": 265,
        "y": 145,
        "w": 95,
        "effect": "water",
        "source": "water",
        "label": "上の水を流す"
      },
      {
        "id": "water2Pin",
        "type": "pin",
        "x": 265,
        "y": 245,
        "w": 95,
        "effect": "water",
        "source": "water2",
        "label": "下の水を流す"
      },
      {
        "id": "valve",
        "type": "switch",
        "x": 295,
        "y": 295,
        "w": 48,
        "effect": "redirect",
        "source": "valve",
        "repeatable": true,
        "label": "共通の水路を左右に切り替える"
      },
      {
        "id": "evacuate",
        "type": "pin",
        "x": 20,
        "y": 225,
        "w": 110,
        "effect": "releaseCat",
        "route": [
          {
            "x": 75,
            "y": 395
          },
          {
            "x": 130,
            "y": 395
          }
        ],
        "pause": true,
        "label": "猫を待機場所へ降ろす"
      },
      {
        "id": "rope",
        "type": "rope",
        "x": 235,
        "y": 90,
        "w": 0,
        "h": 155,
        "effect": "drop",
        "source": "box",
        "label": "箱のロープを切る"
      },
      {
        "id": "cat",
        "type": "switch",
        "x": 320,
        "y": 450,
        "w": 48,
        "effect": "releaseCat",
        "label": "猫をゴールへ送る"
      }
    ]
  },
  {
    "id": 16,
    "title": "岩を橋に使っていい？",
    "theme": "ruins",
    "floor": 425,
    "difficulty": 2,
    "cat": {
      "x": 65,
      "y": 194
    },
    "goal": {
      "x": 355,
      "y": 400
    },
    "route": [
      {
        "x": 355,
        "y": 395
      }
    ],
    "hint": "岩は左の火へ、水は橋の下の火へ。岩を穴に使うと火が2つ残り、水1回では足りない。",
    "entities": [
      {
        "id": "gap",
        "type": "gap",
        "x": 170,
        "y": 425,
        "w": 130
      },
      {
        "id": "fireA",
        "type": "fire",
        "x": 65,
        "y": 395
      },
      {
        "id": "fireB",
        "type": "fire",
        "x": 235,
        "y": 395
      },
      {
        "id": "rock",
        "type": "rock",
        "x": 130,
        "y": 315,
        "landing": {
          "x": 235,
          "y": 463
        },
        "target": "gap",
        "selectable": true
      },
      {
        "id": "water",
        "type": "water",
        "x": 320,
        "y": 100,
        "w": 80,
        "h": 80,
        "target": "fireA"
      },
      {
        "id": "box",
        "type": "box",
        "x": 235,
        "y": 270,
        "landing": {
          "x": 235,
          "y": 463
        },
        "target": "gap",
        "requiresClear": "fireB"
      },
      {
        "id": "selector",
        "type": "fork",
        "x": 320,
        "y": 305,
        "source": "rock",
        "linked": [],
        "choices": [
          "gap",
          "fireA"
        ]
      },
      {
        "id": "pad",
        "type": "pad",
        "x": 130,
        "y": 425,
        "caption": "待機場所"
      },
      {
        "id": "valve",
        "type": "valve",
        "x": 320,
        "y": 225,
        "source": "water",
        "choices": [
          "fireA",
          "fireB"
        ]
      }
    ],
    "actions": [
      {
        "id": "rockPin",
        "type": "pin",
        "x": 80,
        "y": 347,
        "w": 100,
        "effect": "drop",
        "label": "岩を落とす",
        "source": "rock"
      },
      {
        "id": "waterPin",
        "type": "pin",
        "x": 275,
        "y": 185,
        "w": 90,
        "effect": "water",
        "label": "一回分の水を流す",
        "source": "water"
      },
      {
        "id": "selector",
        "type": "switch",
        "x": 300,
        "y": 310,
        "w": 48,
        "effect": "fork",
        "label": "岩の行き先を切り替える",
        "source": "selector",
        "repeatable": true
      },
      {
        "id": "valve",
        "type": "switch",
        "x": 300,
        "y": 230,
        "w": 48,
        "effect": "redirect",
        "label": "水を左右に切り替える",
        "source": "valve",
        "repeatable": true
      },
      {
        "id": "rope",
        "type": "rope",
        "x": 235,
        "y": 80,
        "w": 0,
        "h": 145,
        "effect": "drop",
        "source": "box",
        "label": "箱のロープを切る"
      },
      {
        "id": "catMid",
        "type": "pin",
        "x": 15,
        "y": 225,
        "w": 90,
        "effect": "releaseCat",
        "label": "猫を足場SWへ移す",
        "route": [
          {
            "x": 65,
            "y": 395
          },
          {
            "x": 130,
            "y": 395
          }
        ],
        "pause": true
      },
      {
        "id": "cat",
        "type": "switch",
        "x": 325,
        "y": 450,
        "w": 48,
        "effect": "releaseCat",
        "label": "猫をゴールへ送る"
      }
    ],
    "hints": [
      "岩と水はそれぞれ一回。木箱は火を消せない。",
      "穴は箱でも埋められる。岩は箱にできない仕事へ。",
      "岩は左の火へ、水は橋の下の火へ。岩を穴に使うと火が2つ残り、水1回では足りない。"
    ]
  },
  {
    "id": 17,
    "title": "橋のモーターは一回だけ",
    "theme": "workshop",
    "difficulty": 2,
    "cat": {
      "x": 60,
      "y": 194
    },
    "goal": {
      "x": 370,
      "y": 470
    },
    "route": [
      {
        "x": 370,
        "y": 465
      }
    ],
    "hint": "水を左の火へ→箱を左の橋へ→猫を中央へ→モーターで橋を右へ→ゴール。橋の移動は1回限り。",
    "entities": [
      {
        "id": "gapA",
        "type": "gap",
        "x": 105,
        "y": 495,
        "w": 65,
        "trap": true
      },
      {
        "id": "gapB",
        "type": "gap",
        "x": 255,
        "y": 495,
        "w": 65,
        "trap": true
      },
      {
        "id": "fire",
        "type": "fire",
        "x": 60,
        "y": 445
      },
      {
        "id": "water",
        "type": "water",
        "x": 315,
        "y": 100,
        "w": 85,
        "h": 85,
        "target": "fire"
      },
      {
        "id": "box",
        "type": "box",
        "x": 137,
        "y": 290,
        "landing": {
          "x": 137,
          "y": 533
        },
        "target": "gapA",
        "movable": true
      },
      {
        "id": "bridgeControl",
        "type": "bridgeControl",
        "x": 220,
        "y": 350,
        "source": "box",
        "choices": [
          "gapA",
          "gapB"
        ],
        "moves": 1
      },
      {
        "id": "pad",
        "type": "pad",
        "x": 210,
        "y": 495,
        "caption": "踏むと橋解錠"
      }
    ],
    "actions": [
      {
        "id": "waterPin",
        "type": "pin",
        "x": 265,
        "y": 190,
        "w": 100,
        "effect": "water",
        "label": "水を流す",
        "source": "water"
      },
      {
        "id": "rope",
        "type": "rope",
        "x": 137,
        "y": 70,
        "w": 0,
        "h": 170,
        "effect": "drop",
        "source": "box",
        "label": "箱を橋へ落とす"
      },
      {
        "id": "shift",
        "type": "switch",
        "x": 200,
        "y": 355,
        "w": 48,
        "effect": "shiftBridge",
        "label": "一回限りの橋モーター",
        "source": "bridgeControl",
        "repeatable": true,
        "requiresCatArea": {
          "x": 210,
          "y": 465
        }
      },
      {
        "id": "catMid",
        "type": "pin",
        "x": 10,
        "y": 225,
        "w": 80,
        "effect": "releaseCat",
        "label": "猫を中央へ",
        "route": [
          {
            "x": 60,
            "y": 465
          },
          {
            "x": 210,
            "y": 465
          }
        ],
        "pause": true
      },
      {
        "id": "cat",
        "type": "switch",
        "x": 335,
        "y": 420,
        "w": 48,
        "effect": "releaseCat",
        "label": "猫をゴールへ"
      }
    ],
    "hints": [
      "橋のモーターは一回。右へ移す前に猫はどこにいるべき？",
      "猫を中央の足場で待たせると、左の橋がなくなっても大丈夫。",
      "水を左の火へ→箱を左の橋へ→猫を中央へ→モーターで橋を右へ→ゴール。橋の移動は1回限り。"
    ]
  },
  {
    "id": 18,
    "title": "猫が開ける水路",
    "theme": "workshop",
    "floor": 425,
    "difficulty": 3,
    "cat": {
      "x": 65,
      "y": 194
    },
    "goal": {
      "x": 355,
      "y": 400
    },
    "route": [
      {
        "x": 355,
        "y": 395
      }
    ],
    "hint": "岩を左の火へ→猫を足場SWへ→水路を右へ→水→箱→ゴール。猫で水路レバーのロックを解除する。",
    "entities": [
      {
        "id": "gap",
        "type": "gap",
        "x": 170,
        "y": 425,
        "w": 130
      },
      {
        "id": "fireA",
        "type": "fire",
        "x": 65,
        "y": 395
      },
      {
        "id": "fireB",
        "type": "fire",
        "x": 235,
        "y": 395
      },
      {
        "id": "rock",
        "type": "rock",
        "x": 130,
        "y": 315,
        "landing": {
          "x": 65,
          "y": 395
        },
        "target": "fireA",
        "selectable": true
      },
      {
        "id": "water",
        "type": "water",
        "x": 320,
        "y": 100,
        "w": 80,
        "h": 80,
        "target": "fireA"
      },
      {
        "id": "box",
        "type": "box",
        "x": 235,
        "y": 270,
        "landing": {
          "x": 235,
          "y": 463
        },
        "target": "gap",
        "requiresClear": "fireB"
      },
      {
        "id": "selector",
        "type": "valve",
        "x": 320,
        "y": 305,
        "source": "water",
        "linked": [
          "rock"
        ],
        "choices": [
          "fireA",
          "fireB"
        ]
      },
      {
        "id": "pad",
        "type": "pad",
        "x": 130,
        "y": 425,
        "caption": "踏むと解錠"
      }
    ],
    "actions": [
      {
        "id": "rockPin",
        "type": "pin",
        "x": 80,
        "y": 347,
        "w": 100,
        "effect": "drop",
        "label": "岩を落とす",
        "source": "rock"
      },
      {
        "id": "waterPin",
        "type": "pin",
        "x": 275,
        "y": 185,
        "w": 90,
        "effect": "water",
        "label": "一回分の水を流す",
        "source": "water"
      },
      {
        "id": "selector",
        "type": "switch",
        "x": 300,
        "y": 310,
        "w": 48,
        "effect": "redirect",
        "label": "猫で解錠する共通水路",
        "source": "selector",
        "repeatable": true,
        "requiresCatArea": {
          "x": 130,
          "y": 395
        }
      },
      {
        "id": "rope",
        "type": "rope",
        "x": 235,
        "y": 80,
        "w": 0,
        "h": 145,
        "effect": "drop",
        "source": "box",
        "label": "箱のロープを切る"
      },
      {
        "id": "catMid",
        "type": "pin",
        "x": 15,
        "y": 225,
        "w": 90,
        "effect": "releaseCat",
        "label": "猫を足場SWへ移す",
        "route": [
          {
            "x": 65,
            "y": 395
          },
          {
            "x": 130,
            "y": 395
          }
        ],
        "pause": true
      },
      {
        "id": "cat",
        "type": "switch",
        "x": 325,
        "y": 450,
        "w": 48,
        "effect": "releaseCat",
        "label": "猫をゴールへ送る"
      }
    ],
    "hints": [
      "猫の足場SWが水路のロックにつながっている。",
      "水を残したまま猫をSWへ。左の火は別の物で消せる。",
      "岩を左の火へ→猫を足場SWへ→水路を右へ→水→箱→ゴール。猫で水路レバーのロックを解除する。"
    ]
  },
  {
    "id": 19,
    "title": "残り二回の床スイッチ",
    "theme": "cave",
    "difficulty": 3,
    "cat": {
      "x": 45,
      "y": 194
    },
    "goal": {
      "x": 375,
      "y": 470
    },
    "route": [
      {
        "x": 375,
        "y": 465
      }
    ],
    "hint": "猫を第1足場へ→床を切替→第2足場へ→床を切替→ゴール。スイッチは2回だけ。先に回すと戻せない。",
    "entities": [
      {
        "id": "gapA",
        "type": "gap",
        "x": 80,
        "y": 495,
        "w": 40,
        "trap": true,
        "active": false
      },
      {
        "id": "gapB",
        "type": "gap",
        "x": 190,
        "y": 495,
        "w": 40,
        "trap": true
      },
      {
        "id": "gapC",
        "type": "gap",
        "x": 300,
        "y": 495,
        "w": 40,
        "trap": true
      },
      {
        "id": "cycle",
        "type": "cycle",
        "x": 210,
        "y": 310,
        "choices": [
          "gapA",
          "gapB",
          "gapC"
        ],
        "index": 0,
        "moves": 2
      }
    ],
    "actions": [
      {
        "id": "cycle",
        "type": "switch",
        "x": 190,
        "y": 315,
        "w": 48,
        "effect": "cycleFloor",
        "label": "残り回数つき床スイッチ",
        "source": "cycle",
        "repeatable": true
      },
      {
        "id": "catFirst",
        "type": "pin",
        "x": 5,
        "y": 225,
        "w": 80,
        "effect": "releaseCat",
        "label": "猫を第1足場へ",
        "route": [
          {
            "x": 45,
            "y": 465
          },
          {
            "x": 150,
            "y": 465
          }
        ],
        "pause": true
      },
      {
        "id": "catSecond",
        "type": "switch",
        "x": 155,
        "y": 410,
        "w": 48,
        "effect": "releaseCat",
        "label": "猫を第2足場へ",
        "route": [
          {
            "x": 265,
            "y": 465
          }
        ],
        "pause": true
      },
      {
        "id": "cat",
        "type": "switch",
        "x": 340,
        "y": 410,
        "w": 48,
        "effect": "releaseCat",
        "label": "猫をゴールへ"
      }
    ],
    "hints": [
      "閉じる床は一つ。切替は2回なので、一巡して戻れない。",
      "猫の位置を進めてから、次の穴のために切り替えよう。",
      "猫を第1足場へ→床を切替→第2足場へ→床を切替→ゴール。スイッチは2回だけ。先に回すと戻せない。"
    ]
  },
  {
    "id": 20,
    "title": "残すものを、先に決める",
    "theme": "ruins",
    "difficulty": 3,
    "cat": {
      "x": 60,
      "y": 194
    },
    "goal": {
      "x": 370,
      "y": 470
    },
    "route": [
      {
        "x": 370,
        "y": 465
      }
    ],
    "hint": "岩で左を消火→箱を左の橋へ→猫を中央のSWへ→共通水路を右へ→水で右を消火→橋を右へ→ゴール。水も橋モーターも一回。",
    "entities": [
      {
        "id": "gapA",
        "type": "gap",
        "x": 105,
        "y": 495,
        "w": 65,
        "trap": true
      },
      {
        "id": "gapB",
        "type": "gap",
        "x": 255,
        "y": 495,
        "w": 65,
        "trap": true
      },
      {
        "id": "fireA",
        "type": "fire",
        "x": 60,
        "y": 445
      },
      {
        "id": "fireB",
        "type": "fire",
        "x": 365,
        "y": 445
      },
      {
        "id": "rock",
        "type": "rock",
        "x": 225,
        "y": 150,
        "landing": {
          "x": 60,
          "y": 455
        },
        "target": "fireA",
        "selectable": true
      },
      {
        "id": "water",
        "type": "water",
        "x": 320,
        "y": 100,
        "w": 85,
        "h": 85,
        "target": "fireA"
      },
      {
        "id": "valve",
        "type": "valve",
        "x": 315,
        "y": 285,
        "source": "water",
        "linked": [
          "rock"
        ],
        "choices": [
          "fireA",
          "fireB"
        ]
      },
      {
        "id": "pad",
        "type": "pad",
        "x": 210,
        "y": 495,
        "caption": "踏むと解錠"
      },
      {
        "id": "box",
        "type": "box",
        "x": 137,
        "y": 315,
        "landing": {
          "x": 137,
          "y": 533
        },
        "target": "gapA",
        "movable": true
      },
      {
        "id": "bridgeControl",
        "type": "bridgeControl",
        "x": 220,
        "y": 385,
        "source": "box",
        "choices": [
          "gapA",
          "gapB"
        ],
        "moves": 1
      }
    ],
    "actions": [
      {
        "id": "rockPin",
        "type": "pin",
        "x": 175,
        "y": 180,
        "w": 100,
        "effect": "drop",
        "label": "一個の岩を落とす",
        "source": "rock"
      },
      {
        "id": "waterPin",
        "type": "pin",
        "x": 270,
        "y": 195,
        "w": 100,
        "effect": "water",
        "label": "一回分の水を流す",
        "source": "water"
      },
      {
        "id": "valve",
        "type": "switch",
        "x": 295,
        "y": 290,
        "w": 48,
        "effect": "redirect",
        "label": "猫で解錠する共通水路",
        "source": "valve",
        "repeatable": true,
        "requiresCatArea": {
          "x": 210,
          "y": 465
        }
      },
      {
        "id": "rope",
        "type": "rope",
        "x": 137,
        "y": 70,
        "w": 0,
        "h": 200,
        "effect": "drop",
        "source": "box",
        "label": "箱を橋へ落とす"
      },
      {
        "id": "shift",
        "type": "switch",
        "x": 200,
        "y": 390,
        "w": 48,
        "effect": "shiftBridge",
        "label": "一回限りの橋モーター",
        "source": "bridgeControl",
        "repeatable": true
      },
      {
        "id": "catMid",
        "type": "pin",
        "x": 10,
        "y": 225,
        "w": 80,
        "effect": "releaseCat",
        "label": "猫を中央のSWへ",
        "route": [
          {
            "x": 60,
            "y": 465
          },
          {
            "x": 210,
            "y": 465
          }
        ],
        "pause": true
      },
      {
        "id": "cat",
        "type": "switch",
        "x": 340,
        "y": 420,
        "w": 48,
        "effect": "releaseCat",
        "label": "猫をゴールへ"
      }
    ],
    "hints": [
      "水と岩は各一回。橋も一回しか移動できない。",
      "共通水路を変える前に猫で解錠する。そこへ行くには岩と左の橋が必要。",
      "岩で左を消火→箱を左の橋へ→猫を中央のSWへ→共通水路を右へ→水で右を消火→橋を右へ→ゴール。水も橋モーターも一回。"
    ]
  },
  {
    "id": 21,
    "title": "三つの箱を受け止めろ",
    "theme": "attic",
    "difficulty": 3,
    "cat": {
      "x": 45,
      "y": 465
    },
    "goal": {
      "x": 375,
      "y": 470
    },
    "route": [
      {
        "x": 375,
        "y": 465
      }
    ],
    "hint": "今踏んでいる足場の止め具だけが出る。箱A→第1足場→箱B→第2足場→箱C→ゴール。",
    "hints": [
      "猫が踏んだ足場に対応する穴だけ、箱を受け止められる。",
      "先に全部切ると、止め具のない穴へ箱が落ちてしまう。",
      "今踏んでいる足場の止め具だけが出る。箱A→第1足場→箱B→第2足場→箱C→ゴール。"
    ],
    "entities": [
      {
        "id": "gapA",
        "type": "gap",
        "x": 80,
        "y": 495,
        "w": 40,
        "trap": true,
        "caption": "A"
      },
      {
        "id": "gapB",
        "type": "gap",
        "x": 190,
        "y": 495,
        "w": 40,
        "trap": true,
        "caption": "B"
      },
      {
        "id": "gapC",
        "type": "gap",
        "x": 300,
        "y": 495,
        "w": 40,
        "trap": true,
        "caption": "C"
      },
      {
        "id": "box",
        "type": "box",
        "x": 100,
        "y": 290,
        "landing": {
          "x": 100,
          "y": 533
        },
        "target": "gapA",
        "movable": false,
        "requiresPad": {
          "x": 45
        }
      },
      {
        "id": "boxB",
        "type": "box",
        "x": 210,
        "y": 290,
        "target": "gapB",
        "landing": {
          "x": 210,
          "y": 533
        },
        "requiresPad": {
          "x": 150
        }
      },
      {
        "id": "boxC",
        "type": "box",
        "x": 320,
        "y": 290,
        "target": "gapC",
        "landing": {
          "x": 320,
          "y": 533
        },
        "requiresPad": {
          "x": 260
        }
      },
      {
        "id": "pad0",
        "type": "pad",
        "x": 45,
        "y": 495,
        "caption": "箱Aの止め具"
      },
      {
        "id": "pad1",
        "type": "pad",
        "x": 150,
        "y": 495,
        "caption": "箱Bの止め具"
      },
      {
        "id": "pad2",
        "type": "pad",
        "x": 260,
        "y": 495,
        "caption": "箱Cの止め具"
      }
    ],
    "actions": [
      {
        "id": "rope",
        "type": "rope",
        "x": 100,
        "y": 70,
        "w": 0,
        "h": 48,
        "effect": "drop",
        "source": "box",
        "label": "箱を橋へ落とす"
      },
      {
        "id": "catFirst",
        "type": "switch",
        "x": 25,
        "y": 390,
        "w": 48,
        "effect": "releaseCat",
        "label": "猫を第1足場へ",
        "route": [
          {
            "x": 45,
            "y": 465
          },
          {
            "x": 150,
            "y": 465
          }
        ],
        "pause": true
      },
      {
        "id": "catSecond",
        "type": "switch",
        "x": 145,
        "y": 410,
        "w": 48,
        "effect": "releaseCat",
        "label": "猫を第2足場へ",
        "route": [
          {
            "x": 260,
            "y": 465
          }
        ],
        "pause": true,
        "requiresCatArea": {
          "x": 150,
          "y": 465
        }
      },
      {
        "id": "cat",
        "type": "switch",
        "x": 340,
        "y": 410,
        "w": 48,
        "effect": "releaseCat",
        "label": "猫をゴールへ"
      },
      {
        "id": "ropeB",
        "type": "rope",
        "x": 210,
        "y": 85,
        "w": 0,
        "h": 48,
        "effect": "drop",
        "source": "boxB",
        "label": "箱Bのロープを切る"
      },
      {
        "id": "ropeC",
        "type": "rope",
        "x": 320,
        "y": 85,
        "w": 0,
        "h": 48,
        "effect": "drop",
        "source": "boxC",
        "label": "箱Cのロープを切る"
      }
    ]
  },
  {
    "id": 22,
    "title": "岩を捨てるタイミング",
    "theme": "ruins",
    "difficulty": 3,
    "cat": {
      "x": 45,
      "y": 194
    },
    "goal": {
      "x": 375,
      "y": 470
    },
    "route": [
      {
        "x": 375,
        "y": 465
      }
    ],
    "hint": "水で右火、岩Aで左火→猫を中央→出口を開く→分岐を2回→岩Bでネズミ→出口を閉じる→ゴール。",
    "hints": [
      "ネズミを倒す岩は道に残る。出口から落とす必要がある。",
      "中央の猫が岩の分岐と出口を解錠する。開いた出口は猫も落ちる。",
      "水で右火、岩Aで左火→猫を中央→出口を開く→分岐を2回→岩Bでネズミ→出口を閉じる→ゴール。"
    ],
    "entities": [
      {
        "id": "fireA",
        "type": "fire",
        "x": 45,
        "y": 445
      },
      {
        "id": "fireB",
        "type": "fire",
        "x": 250,
        "y": 445
      },
      {
        "id": "mouse",
        "type": "mouse",
        "x": 345,
        "y": 455
      },
      {
        "id": "water",
        "type": "water",
        "x": 125,
        "y": 85,
        "w": 75,
        "h": 80,
        "target": "fireB"
      },
      {
        "id": "valve",
        "type": "valve",
        "x": 130,
        "y": 300,
        "source": "water",
        "choices": [
          "fireB",
          "fireA"
        ]
      },
      {
        "id": "rockA",
        "type": "rock",
        "x": 225,
        "y": 120,
        "landing": {
          "x": 45,
          "y": 455
        },
        "target": "fireA",
        "selectable": true
      },
      {
        "id": "rockB",
        "type": "rock",
        "x": 330,
        "y": 160,
        "landing": {
          "x": 45,
          "y": 455
        },
        "target": "fireA",
        "selectable": true,
        "exitGap": "gap"
      },
      {
        "id": "fork",
        "type": "fork",
        "x": 295,
        "y": 300,
        "source": "rockA",
        "linked": [
          "rockB"
        ],
        "choices": [
          "fireA",
          "fireB",
          "mouse"
        ]
      },
      {
        "id": "gap",
        "type": "gap",
        "x": 290,
        "y": 495,
        "w": 55,
        "trap": true,
        "active": false,
        "caption": "岩の出口"
      },
      {
        "id": "pad",
        "type": "pad",
        "x": 180,
        "y": 495,
        "caption": "踏むと解錠"
      }
    ],
    "actions": [
      {
        "id": "waterPin",
        "type": "pin",
        "x": 85,
        "y": 170,
        "w": 85,
        "effect": "water",
        "label": "水を流す",
        "source": "water"
      },
      {
        "id": "valve",
        "type": "switch",
        "x": 105,
        "y": 305,
        "w": 48,
        "effect": "redirect",
        "label": "水路を切り替える",
        "source": "valve",
        "repeatable": true
      },
      {
        "id": "rockA",
        "type": "pin",
        "x": 180,
        "y": 152,
        "w": 90,
        "effect": "drop",
        "label": "左の岩を落とす",
        "source": "rockA"
      },
      {
        "id": "rockB",
        "type": "pin",
        "x": 280,
        "y": 192,
        "w": 100,
        "effect": "drop",
        "label": "右の岩を落とす",
        "source": "rockB"
      },
      {
        "id": "fork",
        "type": "switch",
        "x": 275,
        "y": 305,
        "w": 48,
        "effect": "fork",
        "label": "岩の3方向分岐",
        "source": "fork",
        "repeatable": true,
        "requiresCatArea": {
          "x": 180,
          "y": 465
        },
        "maxUses": 2
      },
      {
        "id": "cat",
        "type": "pin",
        "x": 5,
        "y": 225,
        "w": 55,
        "effect": "releaseCat",
        "label": "猫をゴールへ送る"
      },
      {
        "id": "catMid",
        "type": "switch",
        "x": 185,
        "y": 365,
        "w": 48,
        "effect": "releaseCat",
        "label": "猫を分岐の解錠足場へ",
        "route": [
          {
            "x": 45,
            "y": 465
          },
          {
            "x": 180,
            "y": 465
          }
        ],
        "pause": true
      },
      {
        "id": "hatch",
        "type": "switch",
        "x": 275,
        "y": 385,
        "w": 48,
        "effect": "hatch",
        "source": "gap",
        "label": "岩の出口を開閉",
        "repeatable": true,
        "maxUses": 2,
        "requiresCatArea": {
          "x": 180,
          "y": 465
        }
      }
    ]
  },
  {
    "id": 23,
    "title": "連動する二つのレバー",
    "theme": "workshop",
    "difficulty": 3,
    "cat": {
      "x": 45,
      "y": 194
    },
    "goal": {
      "x": 375,
      "y": 470
    },
    "route": [
      {
        "x": 375,
        "y": 465
      }
    ],
    "hint": "A+Bを閉じ猫を第1、第2足場へ→猫でB+Cを解錠して切替→ゴール。切替後はBが開くので先に第2足場へ。",
    "hints": [
      "Aは橙、Bは青、Cは紫。レバーをタップすると開閉予定を確認できる。",
      "右のB+Cレバーは猫が第2足場へ到着すると解除する。Bを渡ってから切り替えよう。",
      "A+Bを閉じ猫を第1、第2足場へ→猫でB+Cを解錠して切替→ゴール。切替後はBが開くので先に第2足場へ。"
    ],
    "entities": [
      {
        "id": "gapA",
        "type": "gap",
        "x": 80,
        "y": 495,
        "w": 40,
        "trap": true,
        "caption": "A",
        "color": "#d3984c"
      },
      {
        "id": "gapB",
        "type": "gap",
        "x": 190,
        "y": 495,
        "w": 40,
        "trap": true,
        "caption": "B",
        "color": "#458d9a"
      },
      {
        "id": "gapC",
        "type": "gap",
        "x": 300,
        "y": 495,
        "w": 40,
        "trap": true,
        "caption": "C",
        "color": "#8b70ae"
      },
      {
        "id": "pad",
        "type": "pad",
        "x": 150,
        "y": 495,
        "caption": "踏むと解錠"
      },
      {
        "id": "pad2",
        "type": "pad",
        "x": 260,
        "y": 495,
        "caption": "踏むと解錠"
      }
    ],
    "actions": [
      {
        "id": "leverAB",
        "type": "switch",
        "x": 115,
        "y": 300,
        "w": 48,
        "effect": "pairedHatches",
        "label": "AとBの床を切り替える",
        "source": "gapA",
        "linked": "gapB",
        "repeatable": true,
        "maxUses": 2,
        "preview": true,
        "color": "#bc8650"
      },
      {
        "id": "leverBC",
        "type": "switch",
        "x": 270,
        "y": 300,
        "w": 48,
        "effect": "pairedHatches",
        "label": "猫で解錠するBとCのレバー",
        "source": "gapB",
        "linked": "gapC",
        "repeatable": true,
        "maxUses": 1,
        "requiresCatArea": {
          "x": 260,
          "y": 465
        },
        "preview": true,
        "color": "#8071a4"
      },
      {
        "id": "catFirst",
        "type": "pin",
        "x": 5,
        "y": 225,
        "w": 55,
        "effect": "releaseCat",
        "label": "猫を第1足場へ",
        "route": [
          {
            "x": 45,
            "y": 465
          },
          {
            "x": 150,
            "y": 465
          }
        ],
        "pause": true
      },
      {
        "id": "catSecond",
        "type": "switch",
        "x": 145,
        "y": 410,
        "w": 48,
        "effect": "releaseCat",
        "label": "猫を第2足場へ",
        "route": [
          {
            "x": 260,
            "y": 465
          }
        ],
        "pause": true,
        "requiresCatArea": {
          "x": 150,
          "y": 465
        }
      },
      {
        "id": "cat",
        "type": "switch",
        "x": 340,
        "y": 410,
        "w": 48,
        "effect": "releaseCat",
        "label": "猫をゴールへ"
      }
    ]
  },
  {
    "id": 24,
    "title": "岩の出口、猫の入口",
    "theme": "cave",
    "difficulty": 3,
    "cat": {
      "x": 45,
      "y": 194
    },
    "goal": {
      "x": 375,
      "y": 470
    },
    "route": [
      {
        "x": 375,
        "y": 465
      }
    ],
    "hint": "岩でネズミ退散（左の穴へ岩を捨てる）→床をAへ→猫を第1足場→床をBへ→第2足場→床をCへ→ゴール。切替は3回。",
    "hints": [
      "岩の出口はAの穴。猫が渡る前にはAを閉じる必要がある。",
      "岩を片付ける前にAを閉じると、やり直す切替回数が足りない。",
      "岩でネズミ退散（左の穴へ岩を捨てる）→床をAへ→猫を第1足場→床をBへ→第2足場→床をCへ→ゴール。切替は3回。"
    ],
    "entities": [
      {
        "id": "gapA",
        "type": "gap",
        "x": 80,
        "y": 495,
        "w": 40,
        "trap": true,
        "caption": "A"
      },
      {
        "id": "gapB",
        "type": "gap",
        "x": 190,
        "y": 495,
        "w": 40,
        "trap": true,
        "caption": "B"
      },
      {
        "id": "gapC",
        "type": "gap",
        "x": 300,
        "y": 495,
        "w": 40,
        "trap": true,
        "active": false,
        "caption": "C"
      },
      {
        "id": "cycle",
        "type": "cycle",
        "x": 295,
        "y": 310,
        "choices": [
          "gapA",
          "gapB",
          "gapC"
        ],
        "index": 2,
        "moves": 3
      },
      {
        "id": "rock",
        "type": "rock",
        "x": 145,
        "y": 140,
        "landing": {
          "x": 145,
          "y": 455
        },
        "target": "mouse",
        "exitGap": "gapA"
      },
      {
        "id": "mouse",
        "type": "mouse",
        "x": 145,
        "y": 455
      },
      {
        "id": "pad",
        "type": "pad",
        "x": 150,
        "y": 495,
        "caption": "踏むと解錠"
      }
    ],
    "actions": [
      {
        "id": "rockPin",
        "type": "pin",
        "x": 95,
        "y": 175,
        "w": 100,
        "effect": "drop",
        "label": "岩を落とす",
        "source": "rock"
      },
      {
        "id": "cycle",
        "type": "switch",
        "x": 275,
        "y": 315,
        "w": 48,
        "effect": "cycleFloor",
        "label": "3回だけの床切替",
        "source": "cycle",
        "repeatable": true
      },
      {
        "id": "catFirst",
        "type": "pin",
        "x": 5,
        "y": 225,
        "w": 55,
        "effect": "releaseCat",
        "label": "猫を第1足場へ",
        "route": [
          {
            "x": 45,
            "y": 465
          },
          {
            "x": 150,
            "y": 465
          }
        ],
        "pause": true
      },
      {
        "id": "catSecond",
        "type": "switch",
        "x": 145,
        "y": 410,
        "w": 48,
        "effect": "releaseCat",
        "label": "猫を第2足場へ",
        "route": [
          {
            "x": 260,
            "y": 465
          }
        ],
        "pause": true,
        "requiresCatArea": {
          "x": 150,
          "y": 465
        }
      },
      {
        "id": "cat",
        "type": "switch",
        "x": 340,
        "y": 410,
        "w": 48,
        "effect": "releaseCat",
        "label": "猫をゴールへ"
      }
    ]
  },
  {
    "id": 25,
    "title": "渡った先で使う岩",
    "theme": "ruins",
    "difficulty": 4,
    "cat": {
      "x": 45,
      "y": 194
    },
    "goal": {
      "x": 375,
      "y": 470
    },
    "route": [
      {
        "x": 375,
        "y": 465
      }
    ],
    "hint": "水路を左へ→水→左の岩で右の火を消す→橋を左へ→第1足場→橋を中央→第2足場→岩の分岐をネズミへ→右の岩→橋を右→ゴール。",
    "hints": [
      "左の火を消す水、右の火を消す岩、ネズミを倒す岩。3つの資源は各1回。",
      "岩の分岐は第2足場の猫が解除する。2つ目の岩はそこまで残しておく。",
      "水路を左へ→水→左の岩で右の火を消す→橋を左へ→第1足場→橋を中央→第2足場→岩の分岐をネズミへ→右の岩→橋を右→ゴール。"
    ],
    "entities": [
      {
        "id": "gapA",
        "type": "gap",
        "x": 80,
        "y": 495,
        "w": 40,
        "trap": true,
        "caption": "A"
      },
      {
        "id": "gapB",
        "type": "gap",
        "x": 190,
        "y": 495,
        "w": 40,
        "trap": true,
        "caption": "B"
      },
      {
        "id": "gapC",
        "type": "gap",
        "x": 300,
        "y": 495,
        "w": 40,
        "trap": true,
        "caption": "C"
      },
      {
        "id": "fireA",
        "type": "fire",
        "x": 45,
        "y": 445
      },
      {
        "id": "fireB",
        "type": "fire",
        "x": 300,
        "y": 445
      },
      {
        "id": "mouse",
        "type": "mouse",
        "x": 365,
        "y": 455
      },
      {
        "id": "water",
        "type": "water",
        "x": 115,
        "y": 70,
        "w": 75,
        "h": 80,
        "target": "fireB"
      },
      {
        "id": "valve",
        "type": "valve",
        "x": 59,
        "y": 325,
        "source": "water",
        "choices": [
          "fireB",
          "fireA"
        ]
      },
      {
        "id": "rockA",
        "type": "rock",
        "x": 225,
        "y": 120,
        "landing": {
          "x": 300,
          "y": 455
        },
        "target": "fireB",
        "selectable": true
      },
      {
        "id": "rockB",
        "type": "rock",
        "x": 330,
        "y": 155,
        "landing": {
          "x": 300,
          "y": 455
        },
        "target": "fireB",
        "selectable": true
      },
      {
        "id": "fork",
        "type": "fork",
        "x": 325,
        "y": 300,
        "source": "rockA",
        "linked": [
          "rockB"
        ],
        "choices": [
          "fireB",
          "mouse",
          "fireA"
        ]
      },
      {
        "id": "box",
        "type": "box",
        "x": 125,
        "y": 355,
        "landing": {
          "x": 100,
          "y": 533
        },
        "target": "gapA",
        "movable": true
      },
      {
        "id": "bridgeControl",
        "type": "bridgeControl",
        "x": 244,
        "y": 385,
        "source": "box",
        "choices": [
          "gapA",
          "gapB",
          "gapC"
        ],
        "moves": 2
      },
      {
        "id": "pad",
        "type": "pad",
        "x": 150,
        "y": 495,
        "caption": "踏むと解錠"
      },
      {
        "id": "pad2",
        "type": "pad",
        "x": 260,
        "y": 495,
        "caption": "踏むと解錠"
      }
    ],
    "actions": [
      {
        "id": "waterPin",
        "type": "pin",
        "x": 75,
        "y": 155,
        "w": 85,
        "effect": "water",
        "label": "水を流す",
        "source": "water"
      },
      {
        "id": "valve",
        "type": "switch",
        "x": 35,
        "y": 330,
        "w": 48,
        "effect": "redirect",
        "label": "水路を切り替える",
        "source": "valve",
        "repeatable": true
      },
      {
        "id": "rockA",
        "type": "pin",
        "x": 180,
        "y": 152,
        "w": 90,
        "effect": "drop",
        "label": "左の岩を落とす",
        "source": "rockA"
      },
      {
        "id": "rockB",
        "type": "pin",
        "x": 280,
        "y": 187,
        "w": 100,
        "effect": "drop",
        "label": "残しておいた右の岩を落とす",
        "source": "rockB"
      },
      {
        "id": "fork",
        "type": "switch",
        "x": 305,
        "y": 305,
        "w": 48,
        "effect": "fork",
        "label": "猫で解錠する岩の3方向分岐",
        "source": "fork",
        "repeatable": true,
        "requiresCatArea": {
          "x": 260,
          "y": 465
        }
      },
      {
        "id": "rope",
        "type": "rope",
        "x": 125,
        "y": 260,
        "w": 0,
        "h": 48,
        "effect": "drop",
        "source": "box",
        "label": "箱を橋へ落とす"
      },
      {
        "id": "shift",
        "type": "switch",
        "x": 220,
        "y": 390,
        "w": 48,
        "effect": "shiftBridge",
        "label": "残り2回の橋モーター",
        "source": "bridgeControl",
        "repeatable": true
      },
      {
        "id": "catFirst",
        "type": "pin",
        "x": 5,
        "y": 225,
        "w": 55,
        "effect": "releaseCat",
        "label": "猫を第1足場へ",
        "route": [
          {
            "x": 45,
            "y": 465
          },
          {
            "x": 150,
            "y": 465
          }
        ],
        "pause": true
      },
      {
        "id": "catSecond",
        "type": "switch",
        "x": 130,
        "y": 410,
        "w": 48,
        "effect": "releaseCat",
        "label": "猫を第2足場へ",
        "route": [
          {
            "x": 260,
            "y": 465
          }
        ],
        "pause": true,
        "requiresCatArea": {
          "x": 150,
          "y": 465
        }
      },
      {
        "id": "cat",
        "type": "switch",
        "x": 340,
        "y": 410,
        "w": 48,
        "effect": "releaseCat",
        "label": "猫をゴールへ"
      }
    ]
  }
];
