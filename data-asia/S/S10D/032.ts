import { Card } from "../../../interfaces"
import Set from "../S10D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "怪力V"
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 220,
	types: ["Fighting"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "復仇光炮"
		},

		effect: {
			'zh-tw': "若自己的備戰寶可夢身上放置有傷害指示物，則增加50點傷害。"
		},

		damage: "50+",
		cost: ["Fighting", "Colorless"]
	}, {
		name: {
			'zh-tw': "地球上投"
		},

		damage: 140,
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "F"
}

export default card