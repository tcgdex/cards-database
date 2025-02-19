import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"
import { Pikachu } from "./Boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Nidoking"
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 150,
	types: ["Darkness"],
	stage: "Stage2",
	evolveFrom: {
		en: "Nidorino"
	},

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

	retreat: 0,
	rarity: "One Star",
	boosters: [Pikachu]
}

export default card
