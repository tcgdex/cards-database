import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"
import { Charizard } from "./boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Lapras"
	},

	illustrator: "Sekio",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Hydro Pump"
		},

		effect: {
			en: "If this Pokémon has at least 3 extra W Energy attached, this attack does 70 more damage."
		},

		damage: "20+"
	}],

	retreat: 2,
	rarity: "Three Diamond",
	boosters: [Charizard]
}

export default card
