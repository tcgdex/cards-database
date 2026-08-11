import { Card } from "models/database/card"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Inflatable Boat",
		'fr-fr': "Canot Gonflable"
	},

	illustrator: "Toyste Beach",
	rarity: "Two Diamond",
	category: "Trainer",

	effect: {
		'en-us': "The Retreat Cost of the {W} Pokémon this card is attached to is 1 less.",
		'fr-fr': "Le Coût de Retraite du Pokémon {W} auquel cette carte est attachée est diminué de 1."
	},

	trainerType: "Tool"
}

export default card