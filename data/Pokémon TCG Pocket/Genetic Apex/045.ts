import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Flareon"
	},

	illustrator: "sui",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],
	stage: "Stage1",
	evolveFrom: {
		en: "Eevee"
	},


	attacks: [{
		cost: ["Fire", "Colorless", "Colorless"],

		name: {
			en: "Flamethrower"
		},

		effect: {
			en: "Discard 1 R Energy from this Pokémon."
		},

		damage: "110"
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 2,
	rarity: "Three Diamond",

	description: {
		en: "Inhaled air is carried to its flame sac, heated, and exhaled as fire that reaches over 3,000 degrees Fahrenheit.",
	}
}

export default card
