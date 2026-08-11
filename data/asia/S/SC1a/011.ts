import { Card } from "../../../interfaces"
import Set from "../Sc1a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "倫琴貓"
	},

	illustrator: "Hasuno",
	category: "Pokemon",
	hp: 160,
	types: ["Lightning"],

	description: {
		'zh-tw': "倫琴貓的透視能力在發現危險事物時非常有幫助。"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'zh-tw': "襲擊"
		},

		effect: {
			'zh-tw': "在這個回合，若這隻寶可夢從「勒克貓」進化，則增加100點傷害。"
		},

		damage: "60+",
		cost: ["Lightning"]
	}, {
		name: {
			'zh-tw': "伏特頭擊"
		},

		damage: 120,
		cost: ["Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card