import { Card } from "../../../interfaces"
import Set from "../S8b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "列陣兵"
	},

	illustrator: "Hasuno",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],

	description: {
		'zh-tw': "６隻為一體的寶可夢。慣於團隊行動，會一邊 變換陣形一邊戰鬥。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "連擊之陣"
		},

		effect: {
			'zh-tw': "造成自己的場上「連擊」寶可夢的數量×20點傷害。"
		},

		damage: "20×",
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card