import { Card } from "models/database/card"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	dexId: [52],

	name: {
		'en-us': "Meowth"
	},

	illustrator: "Teeziro",
	rarity: "Three Star",
	category: "Pokemon",
	hp: 50,
	types: ["Colorless"],

	description: {
		'en-us': "It loves things that sparkle. When it sees a shiny\nobject, the gold coin on its head shines, too."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Carefree Steps"
		},

		effect: {
			'en-us': "If any damage is done to this Pokémon by attacks, flip a coin. If heads, prevent that damage."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Feelin' Fine"
		},

		cost: ["Colorless"],

		effect: {
			'en-us': "Draw a card."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card