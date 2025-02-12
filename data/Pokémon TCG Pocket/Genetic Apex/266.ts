import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"
import { Charizard } from "./boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Erika"
	},

	illustrator: "saino misaki",
	category: "Trainer",

	effect: {
		en: "Heal 50 damage from 1 of your G Pokémon."
	},

	trainerType: "Supporter",
	rarity: "Two Star",
	boosters: [Charizard]
}

export default card
