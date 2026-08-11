import { Card } from "models/database/card"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Tyrogue",
		'fr-fr': "Debugant"
	},

	illustrator: "Mina Nakai",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [236],
	hp: 30,
	types: ["Fighting"],

	description: {
		'en-us': "It is always bursting with energy. To make itself\nstronger, it keeps on fighting even if it loses.",
		'fr-fr': "Ce Pokémon est débordant d'énergie. Même s'il perd encore et encore, il se relève toujours pour devenir plus fort."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Slappy Knuckle",
			'fr-fr': "Poing qui Tabasse"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Colorless",
		value: "+20"
	}],

	retreat: 0,
	boosters: ["ho-oh"]
}

export default card