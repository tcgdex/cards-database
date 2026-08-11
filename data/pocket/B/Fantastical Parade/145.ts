import { Card } from "models/database/card"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Lucky Ice Pop"
	},

	illustrator: "inose yukie",
	rarity: "Two Diamond",
	category: "Trainer",

	effect: {
		'en-us': "Heal 20 damage from your Active Pokémon. If you healed any damage in this way, flip a coin. If heads, put this Lucky Ice Pop into your hand instead of the discard pile."
	},

	trainerType: "Item"
}

export default card