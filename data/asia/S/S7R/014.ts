import { Card } from "../../../interfaces"
import Set from "../S7R"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "爆香猿"
	},

	illustrator: "Tomokazu Komiya",
	category: "Pokemon",
	hp: 100,
	types: ["Fire"],

	description: {
		'zh-tw': "興奮的時候，頭部與尾巴就會變熱並飛出火花。不知為何最喜歡吃甜的。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "打擊"
		},

		damage: 20,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "火焰一投"
		},

		effect: {
			'zh-tw': "從自己的手牌將最多2張基本能量卡丟棄，造成其張數×60點傷害。"
		},

		damage: "60×",
		cost: ["Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card