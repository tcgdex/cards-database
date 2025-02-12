import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"
import { Mewtwo } from "./boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Tentacruel"
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],
	stage: "Stage1",
	evolveFrom: {
		en: "Tentacool"
	},


	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			en: "Poison Tentacles"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Poisoned."
		},

		damage: "50"
	}],

	retreat: 2,
	rarity: "Two Diamond",
	boosters: [Mewtwo]
}

export default card
