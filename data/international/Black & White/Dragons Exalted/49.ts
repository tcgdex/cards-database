import { Card } from 'models/database/card'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		'en-us': "Drifloon",
		'fr-fr': "Baudrive",
		'es-es': "Drifloon",
		'it-it': "Drifloon",
		'pt-br': "Drifloon",
		'de-de': "Driftlon"
	},

	illustrator: "MAHOU",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		425,
	],

	hp: 60,

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
				'en-us': "Sneaky Placement",
				'fr-fr': "Placement Vicieux",
			},
			effect: {
				'en-us': "Put 1 damage counter on 1 of your opponent's Pokémon.",
				'fr-fr': "Placez 1 marqueur de dégâts sur 1 des Pokémon de votre adversaire.",
			},

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Because of the way it floats aimlessly, an old folktale calls it a \"Signpost for Wandering Spirits.\"",
	},

	thirdParty: {
		cardmarket: 280488,
		tcgplayer: 84961
	}
}

export default card
