import { Card } from 'models/database/card'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		'en-us': "Duskull",
		'fr-fr': "Skelénox",
		'es-es': "Duskull",
		'it-it': "Duskull",
		'pt-br': "Duskull",
		'de-de': "Zwirrlicht"
	},

	illustrator: "Naoki Saito",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		355,
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
				'en-us': "Confuse Ray",
				'fr-fr': "Onde Folie",
			},
			effect: {
				'en-us': "The Defending Pokémon is now Confused.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Confus.",
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
		'en-us': "It loves the crying of children. It startles bad kids by passing through walls and making them cry.",
	},

	thirdParty: {
		cardmarket: 280648,
		tcgplayer: 85055
	}
}

export default card
