import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"
import { Charizard } from "./boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Sabrina"
	},

	illustrator: "Yuu Nishida",
	category: "Trainer",

	effect: {
		en: "Switch out your opponent's Active Pokémon to the Bench. (Your opponent choses the new Active Pokémon)"
	},

	trainerType: "Supporter",
	rarity: "Two Diamond",
	boosters: [Charizard]
}

export default card
