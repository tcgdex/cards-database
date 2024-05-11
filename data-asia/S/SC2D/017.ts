import { Card } from "../../../interfaces"
import Set from "../SC2D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "爆香猴"
	},

	illustrator: "Megumi Higuchi",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],

	description: {
		'zh-tw': "在火山的洞穴裡生活。頭上的毛髮叢中熊熊燃燒著，溫度高達３００度。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "火種"
		},

		damage: 10,
		cost: ["Fire"]
	}, {
		name: {
			'zh-tw': "咬住"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
