import { Card } from "models/database/card"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Diantha"
	},

	illustrator: "saino misaki",
	rarity: "Two Diamond",
	category: "Trainer",

	effect: {
		'en-us': "Heal 90 damage from 1 of your {P} Pokémon that has 2 or more {P} Energy attached. If you healed any damage in this way, discard 2 {P} Energy from that Pokémon."
	},

	trainerType: "Supporter"
}

export default card