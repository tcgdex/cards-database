import { Card } from 'models/database/card'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Gastly",
		'fr-fr': "Fantominus"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Promo",
	category: "Pokemon",
	set: Set,

	dexId: [
		92,
	],

	hp: 50,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Sleep Poison",
				'fr-fr': "Poison Dodo"
			},
			effect: {
				'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Asleep and Poisoned.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Endormi et Empoisonné."
			},

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Born from gases, anyone would faint if engulfed by its gaseous body, which contains poison.",
	},

	thirdParty: {
		cardmarket: 290105
	}
}

export default card
