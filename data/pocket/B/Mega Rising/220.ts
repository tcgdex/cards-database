import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Lucky Mittens"
	},

	illustrator: "Toyste Beach",
	rarity: "Two Diamond",
	category: "Trainer",

	effect: {
		'en-us': "Whenever your opponent's Pokémon is Knocked Out by damage from an attack used by the Pokémon this card is attached to, draw a card."
	},

	trainerType: "Tool",

	boosters: ["mega-altaria"]
}

export default card