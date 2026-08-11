import { Card } from "models/database/card"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Eevee Bag",
		'fr-fr': "Sac Évoli"
	},

	illustrator: "AYUMI ODASHIMA",
	rarity: "Two Diamond",
	category: "Trainer",

	effect: {
		'en-us': "Choose 1:\n\nDuring this turn, attacks used by your Pokémon that evolve from Eevee do +10 damage to your opponent's Active Pokémon.\n\nHeal 20 damage from each of your Pokémon that evolves from Eevee.",
		'fr-fr': "Choisissez un de ces effets :"
	},

	trainerType: "Item"
}

export default card