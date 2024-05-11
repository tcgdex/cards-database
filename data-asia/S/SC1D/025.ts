import { Card } from "../../../interfaces"
import Set from "../SC1D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "騰蹴小將"
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],

	description: {
		'zh-tw': "蓬鬆的體毛幫助牠增強了抵禦寒冷的能力，也使牠能夠使出溫度更高的火屬性招式。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "踢"
		},

		damage: 20,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "高溫爆破"
		},

		damage: 50,
		cost: ["Fire", "Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
