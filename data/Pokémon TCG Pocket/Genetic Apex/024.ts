import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"
import { Charizard } from "./Boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Tangela"
	},

	illustrator: "Midori Harada",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			en: "Absorb"
		},

		effect: {
			en: "Heal 10 damage from this Pokémon."
		},

		damage: "40"
	}],

	retreat: 2,
	rarity: "One Diamond",
	boosters: [Charizard]
}

export default card
