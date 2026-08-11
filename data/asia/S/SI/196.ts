import { Card } from "../../../interfaces"
import Set from "../SI"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "噬沙堡爺"
	},

	illustrator: "Shibuzoh.",
	category: "Pokemon",
	hp: 140,
	types: ["Psychic"],
	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "沙之陰森"
		},

		damage: 120,
		cost: ["Psychic", "Psychic", "Colorless"]
	}, {
		name: {
			'zh-tw': "沙塵壓迫"
		},

		effect: {
			'zh-tw': "若對手的戰鬥寶可夢為【基礎】寶可夢，則將那隻寶可夢【氣絕】。"
		},

		cost: ["Psychic", "Psychic", "Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 4,
	regulationMark: "E"
}

export default card