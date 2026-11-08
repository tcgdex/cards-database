import { Card } from "models/database/card"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Slowpoke",
		'fr-fr': "Ramoloss"
	},

	illustrator: "Saya Tsuruta",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [79],
	hp: 60,
	types: ["Water"],

	description: {
		'en-us': "It is incredibly slow and dopey. It takes five\nseconds for it to feel pain when under attack.",
		'fr-fr': "Ce Pokémon est très lent et apathique. Il lui faut cinq secondes pour ressentir la douleur provoquée par une attaque."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Water Gun",
			'fr-fr': "Pistolet à O"
		},

		damage: 20,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card