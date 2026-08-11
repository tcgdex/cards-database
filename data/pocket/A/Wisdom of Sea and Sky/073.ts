import { Card } from "models/database/card"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Slowpoke",
		'fr-fr': "Ramoloss"
	},

	illustrator: "Aya Kusube",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [79],
	hp: 70,
	types: ["Psychic"],

	description: {
		'en-us': "It is incredibly slow and dopey. It takes five\nseconds for it to feel pain when under attack.",
		'fr-fr': "Ce Pokémon est très lent et apathique. Il lui faut cinq secondes pour ressentir la douleur provoquée par une attaque."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Rest",
			'fr-fr': "Repos"
		},

		cost: ["Colorless"],

		effect: {
			'en-us': "This Pokémon is now Asleep. Heal 30 damage from it.",
			'fr-fr': "Ce Pokémon est maintenant Endormi. Soignez 30 dégâts à ce Pokémon."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["lugia"]
}

export default card