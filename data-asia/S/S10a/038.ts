import { Card } from "../../../interfaces"
import Set from "../S10a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "天蠍"
	},

	illustrator: "Miki Tanaka",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],

	description: {
		'zh-tw': "會朝著獵物迎面飛來，然後趁著被纏上的獵物 驚慌失措時刺入毒針。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "旋風鉗"
		},

		effect: {
			'zh-tw': "擲4次硬幣，造成正面出現的次數×10點傷害。"
		},

		damage: "10×",
		cost: ["Fighting"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card