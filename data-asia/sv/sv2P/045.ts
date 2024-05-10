import { Card } from "../../../interfaces"
import Set from "../sv2P"

const card: Card = {
	set: Set,

	name: {
		ja: "ヤミカラス",
		'zh-tw': "黑暗鴉"
	},

	illustrator: "Teeziro",
	rarity: "Common",
	category: "Pokemon",
	dexId: [198],
	hp: 60,
	types: ["Darkness"],

	description: {
		ja: "夜 姿を 見かけると 不吉なことが 起きると 信じられ 忌み嫌われている ポケモン。",
		'zh-tw': "人們相信晚上看到牠就會發生不吉利的事， 這讓牠成了人見人厭的寶可夢。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "スピンターン",
			'zh-tw': "旋轉迴旋"
		},

		damage: 10,

		effect: {
			ja: "このポケモンをベンチポケモンと入れ替える。",
			'zh-tw': "將這隻寶可夢與備戰寶可夢互換。"
		}
	}, {
		cost: ["Darkness"],

		name: {
			ja: "だんけつのつばさ",
			'zh-tw': "團結之翼"
		},

		damage: "20×",

		effect: {
			ja: "自分のトラッシュにある、ワザ「だんけつのつばさ」を持つポケモンの枚数×20ダメージ。",
			'zh-tw': "造成自己的棄牌區的，持有「團結之翼」招式的寶可夢卡的張數×20點傷害。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card