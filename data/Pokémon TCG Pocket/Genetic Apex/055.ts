import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"
import { Pikachu } from "./Boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Blastoise"
	},

	illustrator: "Nurikabe",
	category: "Pokemon",
	hp: 150,
	types: ["Water"],
	stage: "Stage2",
	evolveFrom: {
		en: "Wartortle"
	},


	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			en: "Hydro Pump"
		},

		effect: {
			en: "If this Pokémon has at least 2 extra W Energy attached, this attack does 60 more damage."
		},

		damage: "80+"
	}],

	retreat: 3,
	rarity: "Three Diamond",
	boosters: [Pikachu]
}

export default card
