import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Jirachi"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [385],
	hp: 50,
	types: ["Psychic"],

	description: {
		'en-us': "It is said to have the ability to grant any wish for\njust one week every thousand years."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Star Drop"
		},

		cost: ["Psychic"],

		effect: {
			'en-us': "This attack does 30 damage to 1 of your opponent's Pokémon."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-altaria"]
}

export default card