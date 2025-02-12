import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"
import { Charizard } from "./boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Erika"
	},

	illustrator: "kirisAki",
	category: "Trainer",

	effect: {
		en: "Heal 50 damage from 1 of your G Pokémon."
	},

	trainerType: "Supporter",
	rarity: "Two Diamond",
	boosters: [Charizard]
}

export default card
