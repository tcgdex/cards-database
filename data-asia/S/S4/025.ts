import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "咬咬龜"
	},

	illustrator: "kirisAki",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],

	description: {
		'zh-tw': "有著不管看到什麼都會咬上去的習性。這似乎是因為長門牙的時候會癢的緣故。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "緊咬不放"
		},

		effect: {
			'zh-tw': "在下個對手的回合，受到這個招式的寶可夢無法撤退。"
		},

		damage: 40,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card