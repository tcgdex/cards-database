import { Card } from "../../../interfaces"
import Set from "../SC2a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "怨影娃娃"
	},

	illustrator: "Miki Tanaka",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		'zh-tw': "吞食人們心中的怨恨和嫉妒等情緒而成長的寶可夢。為了尋找怨恨之心在街上遊蕩。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "纏擾"
		},

		effect: {
			'zh-tw': "在對手的戰鬥寶可夢身上放置1個傷害指示物。"
		},

		cost: ["Psychic"]
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
