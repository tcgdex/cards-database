import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"
import { Mewtwo } from "./boosters"

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

	retreat: 2,
	rarity: "Three Diamond",
	boosters: [Mewtwo]
}

export default card
