import { Card } from "../../../interfaces"
import Set from "../SDM"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "泥偶小人"
	},

	illustrator: "0313",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		'zh-tw': "用黏土製成的寶可夢。即使現在也一直遵循著 數千年前主人的命令。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "拍擊"
		},

		damage: 10,
		cost: ["Psychic"]
	}, {
		name: {
			'zh-tw': "出拳"
		},

		damage: 30,
		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "E"
}

export default card