import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"
import { Mewtwo } from "./boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Venomoth"
	},

	illustrator: "Mina Nakai",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],
	stage: "Stage1",
	evolveFrom: {
		en: "Venonat"
	},

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Poison Powder"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Poisoned."
		},

		damage: "30"
	}],

	retreat: 1,
	rarity: "Two Diamond",
	boosters: [Mewtwo]
}

export default card
