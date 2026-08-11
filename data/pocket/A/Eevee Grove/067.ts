import { Card } from "models/database/card"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Leftovers",
		'fr-fr': "Restes"
	},

	illustrator: "Studio Bora Inc.",
	rarity: "Two Diamond",
	category: "Trainer",

	effect: {
		'en-us': "At the end of your turn, if the Pokémon this card is attached to is in the Active Spot, heal 10 damage from that Pokémon.",
		'fr-fr': "À la fin de votre tour, si le Pokémon auquel cette carte est attachée est sur le Poste Actif, soignez 10 dégâts à ce Pokémon."
	},

	trainerType: "Tool"
}

export default card