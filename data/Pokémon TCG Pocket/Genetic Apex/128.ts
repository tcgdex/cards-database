import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Mewtwo"
	},

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
	rarity: "None"
}

export default card