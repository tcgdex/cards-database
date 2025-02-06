import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Machoke"
	},

	illustrator: "match",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],
	stage: "Stage1",
	evolveFrom: {
		en: "Machop"
	},


	attacks: [{
		cost: ["Fighting", "Fighting"],

		name: {
			en: "Strength"
		},

		damage: "50"
	}],

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 2,
	rarity: "Two Diamond",

	description: {
		en: "Its muscular body is so powerful, it must wear a power-save belt to be able to regulate its motions.",
	}
}

export default card
