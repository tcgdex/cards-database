import { Card } from "../../../interfaces"
import Set from "../S7R"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "爆香猴"
	},

	illustrator: "Misa Tsutsui",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],

	description: {
		'zh-tw': "在火山的洞穴裡生活。頭上的毛髮叢中熊熊燃燒著，溫度高達３００度。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "偷襲"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為反面，則這個招式失敗。"
		},

		damage: 30,
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