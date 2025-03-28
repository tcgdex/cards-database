import { Card } from "../../../interfaces"
import Set from "../SV9"

const card: Card = {
	set: Set,

	name: {
		ja: "ルガルガン",
		'zh-tw': "鬃岩狼人",
		'zh-cn': "鬃岩狼人"
	},

	illustrator: "Shiburingaru",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [745],
	hp: 120,
	types: ["Fighting"],

	description: {
		ja: "鋭い ツメや キバで 獲物を 襲う。 信頼する トレーナーの 指示には 忠実に 従う。",
		'zh-tw': "會用尖牙和利爪襲擊獵物。 只要是信賴的訓練家下的 指令，牠都會忠實地聽從。",
		'zh-cn': "會用尖牙和利爪襲擊獵物。 只要是信賴的訓練家下的 指令，牠都會忠實地聽從。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "とげをまとう",
			'zh-tw': "尖刺纏身",
			'zh-cn': "尖刺纏身"
		},

		effect: {
			ja: "自分の番に、このカードを手札から出して進化させたとき、1回使える。自分のトラッシュから「スパイクエネルギー」を2枚まで選び、このポケモンにつける。",
			'zh-tw': "在自己的回合，從手牌使出這張卡並完成進化時，可使用1次。從自己的棄牌區選擇最多2張「扣殺能量」，附於這隻寶可夢身上。",
			'zh-cn': "在自己的回合，從手牌使出這張卡並完成進化時，可使用1次。從自己的棄牌區選擇最多2張「扣殺能量」，附於這隻寶可夢身上。"
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "クラッチファング",
			'zh-tw': "抓擊獠牙",
			'zh-cn': "抓擊獠牙"
		},

		damage: "40+",

		effect: {
			ja: "相手のバトルポケモンにのっているダメカンの数×40ダメージ追加。",
			'zh-tw': "增加對手的戰鬥寶可夢身上放置的傷害指示物的數量×40點傷害。",
			'zh-cn': "增加對手的戰鬥寶可夢身上放置的傷害指示物的數量×40點傷害。"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "I"
}

export default card