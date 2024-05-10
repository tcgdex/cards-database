import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ニョロゾ",
		'zh-tw': "蚊香君"
	},

	illustrator: "Gemi",
	category: "Pokemon",
	dexId: [61],
	hp: 90,
	types: ["Water"],

	description: {
		ja: "ぬめぬめとした 粘液状の 汗を かく。 敵に 捕まっても ぬるりと すり抜け 逃げるのだ。",
		'zh-tw': "流的汗是又黏又滑的黏液狀。即使被敵人捉住，也能滑溜溜地輕易逃脫。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "スプラッシュ",
			'zh-tw': "飛濺"
		},

		damage: 20
	}, {
		cost: ["Water", "Colorless"],

		name: {
			ja: "かえるとび",
			'zh-tw': "蛙跳"
		},

		damage: "30+",

		effect: {
			ja: "コインを1回投げオモテなら、60ダメージ追加。",
			'zh-tw': "擲1次硬幣若為正面，則增加60點傷害。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card