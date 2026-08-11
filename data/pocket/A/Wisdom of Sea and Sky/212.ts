import { Card } from "models/database/card"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Yanma",
		'fr-fr': "Yanma"
	},

	illustrator: "MAHOU",
	rarity: "One Shiny",
	category: "Pokemon",

	dexId: [193],
	hp: 60,
	types: ["Grass"],

	description: {
		'en-us': "Its eyes can see 360 degrees without moving its\nhead. It won't miss prey—even those behind it.",
		'fr-fr': "Il voit à 360° sans avoir à tourner la tête. Il ne loupe jamais une proie, même dans son dos."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "U-turn",
			'fr-fr': "Demi-Tour"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"],

		effect: {
			'en-us': "Switch this Pokémon with 1 of your Benched Pokémon.",
			'fr-fr': "Échangez ce Pokémon contre l'un de vos Pokémon de Banc."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["ho-oh"]
}

export default card