import { Card } from "models/database/card"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Squirt Bottle",
		'fr-fr': "Carapuce à O"
	},

	illustrator: "AYUMI ODASHIMA",
	rarity: "Two Diamond",
	category: "Trainer",

	effect: {
		'en-us': "Discard a {R} Energy from your opponent's Active Pokémon.",
		'fr-fr': "Défaussez au hasard une Énergie {R} du Pokémon Actif de votre adversaire."
	},

	trainerType: "Item",
	boosters: ["lugia"]
}

export default card