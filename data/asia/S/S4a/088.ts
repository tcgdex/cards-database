import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "多龍巴魯托V"
	},

	illustrator: "aky CG Works",
	category: "Pokemon",
	hp: 210,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "咬住"
		},

		damage: 30,
		cost: ["Psychic"]
	}, {
		name: {
			'zh-tw': "進擊噴射"
		},

		effect: {
			'zh-tw': "在這個回合，若從備戰區將這隻寶可夢放置於戰鬥場，則增加80點傷害。"
		},

		damage: "60+",
		cost: ["Psychic", "Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card