import { Card } from "../../../interfaces"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "鴨嘴火獸"
	},

	illustrator: "Shinji Kanda",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],

	description: {
		'zh-tw': "會用火焰解決獵物。但是一不留神就會把獵物 燒得太焦，然後才後悔。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "踢倒"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "火拳"
		},

		damage: 70,
		cost: ["Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card