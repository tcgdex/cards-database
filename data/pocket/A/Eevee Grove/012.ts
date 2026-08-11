import { Card } from "models/database/card"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Torracat",
		'fr-fr': "Matoufeu"
	},

	illustrator: "Shin Nagasawa",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [726],
	hp: 80,
	types: ["Fire"],

	evolveFrom: {
		'en-us': "Litten"
	},

	description: {
		'en-us': "Torracat will let its Trainer coddle it once they've\ngrown close, but it's a powerful, sharp-clawed\nPokémon, so its Trainer gets covered in scratches.",
		'fr-fr': "Il faut d'abord gagner sa confiance pour pouvoir le câliner. Mais attention, il est puissant et ses griffes acérées peuvent causer des égratignures."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Claw Slash",
			'fr-fr': "Tranch'Griffe"
		},

		damage: 50,
		cost: ["Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 1
}

export default card