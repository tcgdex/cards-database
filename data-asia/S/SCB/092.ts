import { Card } from "../../../interfaces"
import Set from "../SCB"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "大嘴娃"
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 90,
	types: ["Metal"],

	description: {
		'zh-tw': "大嘴娃能用自己那由鋼角變化而成的巨大顎部將對手一口緊緊咬住。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "虎鉗剪"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。"
		},

		damage: 20,
		cost: ["Metal"]
	}, {
		name: {
			'zh-tw': "打穿"
		},

		effect: {
			'zh-tw': "這個招式的傷害不計算弱點・抵抗力、對手的戰鬥寶可夢身上的附加效果。"
		},

		damage: 100,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card