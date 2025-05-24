import { Card } from "../../../interfaces"
import Set from "../SV10"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "袋獸",
		'zh-cn': "袋獸",
		ja: "ガルーラ"
	},

	illustrator: "Sanosuke Sakuma",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],

	description: {
		'zh-tw': "紀錄中記載著， 曾經有沒孩子的袋獸 養育了遇難的人類孩子。",
		'zh-cn': "紀錄中記載著， 曾經有沒孩子的袋獸 養育了遇難的人類孩子。",
		ja: "子どもの いない ガルーラが 遭難した 人間の 子を 育てていたという 記録がある。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "重摑",
			'zh-cn': "重摑",
			ja: "ひっぱたく"
		},

		damage: 50,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "迷昏拳",
			'zh-cn': "迷昏拳",
			ja: "ピヨピヨパンチ"
		},

		effect: {
			'zh-tw': "擲2次硬幣，造成正面出現的次數×90點傷害。",
			'zh-cn': "擲2次硬幣，造成正面出現的次數×90點傷害。",
			ja: "コインを2回投げ、オモテの数×90ダメージ。"
		},

		damage: "90×",
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Common",
	dexId: [115]
}

export default card