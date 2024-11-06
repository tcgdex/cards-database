import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Tangela"
	},

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
	rarity: "None"
}

export default card