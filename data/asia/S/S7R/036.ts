import { Card } from "../../../interfaces"
import Set from "../S7R"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "恰雷姆V"
	},

	illustrator: "Satoshi Shirai",
	category: "Pokemon",
	hp: 210,
	types: ["Fighting"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "衝天粉碎"
		},

		effect: {
			'zh-tw': "這個招式的傷害不計算抵抗力。"
		},

		damage: 100,
		cost: ["Fighting", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card