import { Card } from "models/database/card"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Hoothoot",
		'fr-fr': "Hoothoot"
	},

	illustrator: "Uninori",
	rarity: "One Star",
	category: "Pokemon",

	dexId: [163],
	hp: 50,
	types: ["Colorless"],

	description: {
		'en-us': "It always stands on one foot. It changes feet so\nfast, the movement can rarely be seen.",
		'fr-fr': "Il se tient toujours sur un pied. Il en change si vite qu'on peut à peine distinguer ce mouvement."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Insomnia",
			'fr-fr': "Insomnia"
		},

		effect: {
			'en-us': "This Pokémon can't be Asleep.",
			'fr-fr': "Ce Pokémon ne peut pas être Endormi."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Wing Attack",
			'fr-fr': "Cru-Ailes"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["ho-oh"]
}

export default card