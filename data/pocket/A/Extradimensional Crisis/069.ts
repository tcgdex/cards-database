import { Card } from "models/database/card"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Lusamine",
		'fr-fr': "Elsa-Mina"
	},

	illustrator: "Taira Akitsu",
	rarity: "Two Diamond",
	category: "Trainer",

	effect: {
		'en-us': "You can use this card only if your opponent has gotten at least 1 point.\n\nChoose 1 of your Ultra Beasts. Attach 2 random Energy from your discard pile to that Pokémon.",
		'fr-fr': "Vous ne pouvez utiliser cette carte que si votre adversaire a gagné au moins un point.\n\nChoisissez une de vos Ultra-Chimères. Attachez 2 Énergies au hasard de votre pile de défausse à ce Pokémon."
	},

	trainerType: "Supporter"
}

export default card
