import { Card } from "models/database/card"
import Set from "../Crimson Blaze"

const card: Card = {
	set: Set,

	dexId: [682],

	name: {
		'en-us': "Spritzee"
	},

	illustrator: "Tika Matsuno",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		'en-us': "The scent its body gives off enraptures those\nwho smell it. Noble ladies had no shortage of\nlove for Spritzee."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Sweet Scent"
		},

		cost: ["Psychic"],

		effect: {
			'en-us': "Heal 20 damage from 1 of your Pokémon."
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 1
}

export default card