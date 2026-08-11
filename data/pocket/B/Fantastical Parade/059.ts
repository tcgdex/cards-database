import { Card } from "models/database/card"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	dexId: [78],

	name: {
		'en-us': "Galarian Rapidash"
	},

	illustrator: "You Iribi",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 100,
	types: ["Psychic"],

	evolveFrom: {
		'en-us': "Galarian Ponyta"
	},

	description: {
		'en-us': "Brave and prideful, this Pokémon dashes airily\nthrough the forest, its steps aided by the psychic\npower stored in the fur on its fetlocks."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Photon Laser"
		},

		damage: 40,
		cost: ["Psychic"],

		effect: {
			'en-us': "If you have 5 or more {P} Energy in play, this attack does 60 more damage."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 2
}

export default card