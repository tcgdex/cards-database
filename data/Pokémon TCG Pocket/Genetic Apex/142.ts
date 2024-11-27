import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Primeape"
	},

	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],
	stage: "Stage1",

	attacks: [{
		cost: ["Fighting", "Fighting"],

		name: {
			en: "Fight Back"
		},

		effect: {
			en: "If this Pokémon has damage on it, this attack does 60 more damage."
		},

		damage: "40+"
	}],

	retreat: 1,
	rarity: "Two Diamond"
}

export default card
