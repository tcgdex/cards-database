import { Card } from "models/database/card"
import Set from "../Crimson Blaze"

const card: Card = {
	set: Set,

	dexId: [228],

	name: {
		'en-us': "Houndour"
	},

	illustrator: "Naoyo Kimura",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],

	description: {
		'en-us': "It uses different kinds of cries for communicating\nwith others of its kind and for pursuing its prey."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Roar"
		},

		cost: ["Colorless"],

		effect: {
			'en-us': "Switch out your opponent's Active Pokémon to the Bench. (Your opponent chooses the new Active Pokémon.)"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 1
}

export default card