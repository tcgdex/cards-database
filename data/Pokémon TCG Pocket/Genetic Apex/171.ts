import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Nidoking"
	},

	category: "Pokemon",
	hp: 150,
	types: ["Darkness"],
	stage: "Stage2",

	attacks: [{
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			en: "Poison Horn"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Poisoned."
		},

		damage: "90"
	}],

	retreat: 3,
	rarity: "Three Diamond"
}

export default card
