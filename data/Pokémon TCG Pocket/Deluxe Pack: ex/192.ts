import { Card } from "../../../interfaces"
import Set from "../Deluxe Pack: ex"

const card: Card = {
	set: Set,

	name: {
		en: "Machoke"
	},

	illustrator: "match",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],

	evolveFrom: {
		en: "Machop"
	},

	description: {
		en: "Its muscular body is so powerful, it must wear a\npower-save belt to be able to regulate\nits motions."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Strength"
		},

		damage: 50,
		cost: ["Fighting", "Fighting"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 2
}

export default card