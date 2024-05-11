import { Card } from "../../../interfaces"
import Set from "../SH"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "朽木妖"
	},

	illustrator: "Narumi Sato",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	description: {
		'zh-tw': "腳尖伸出來的根鬚能連結森林中的樹木，並且自由自在地加以操縱。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "重摑"
		},

		damage: 40,
		cost: ["Grass", "Colorless"]
	}, {
		name: {
			'zh-tw': "木槌"
		},

		damage: 90,
		cost: ["Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card