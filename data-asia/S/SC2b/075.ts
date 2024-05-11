import { Card } from "../../../interfaces"
import Set from "../SC2b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "八爪武師V"
	},

	illustrator: "PLANETA Igarashi",
	category: "Pokemon",
	hp: 210,
	types: ["Fighting"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "五花大綁"
		},

		effect: {
			'zh-tw': "在下個對手的回合，受到這個招式的【基礎】寶可夢，無法使用招式。"
		},

		damage: 20,
		cost: ["Fighting"]
	}, {
		name: {
			'zh-tw': "月面水爆"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則增加100點傷害。"
		},

		damage: "120+",
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card
