import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Mewtwo"
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic", "Psychic", "Colorless", "Colorless"],

		name: {
			en: "Power Blast"
		},

		effect: {
			en: "Discard 2 P Energy from this Pokémon."
		},

		damage: "120"
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 2,
	rarity: "Three Diamond",

	description: {
		en: "It was created by a scientist after years of horrific gene-splicing and DNA-engineering experiments.",
	}
}

export default card
