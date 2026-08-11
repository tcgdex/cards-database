import { Card } from "models/database/card"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Piers"
	},

	illustrator: "hncl",
	rarity: "Two Diamond",
	category: "Trainer",

	effect: {
		'en-us': "You can use this card only if you have Galarian Obstagoon in play.\n\nDiscard 2 random Energy from your opponent's Active Pokémon."
	},

	trainerType: "Supporter"
}

export default card