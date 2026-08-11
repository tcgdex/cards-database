import { Card } from 'models/database/card'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		'en-us': "Dusclops",
		'fr-fr': "Téraclope",
		'es-es': "Dusclops",
		'it-it': "Dusclops",
		'pt-br': "Dusclops",
		'de-de': "Zwirrklop"
	},

	illustrator: "Akira Komayama",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		356,
	],

	hp: 80,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Duskull",
		'fr-fr': "Skelénox",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Astonish",
				'fr-fr': "Étonnement",
			},
			effect: {
				'en-us': "Choose a random card from your opponent's hand. Your opponent reveals that card and shuffles it into his or her deck.",
				'fr-fr': "Choisissez une carte au hasard de la main de votre adversaire. Votre adversaire montre la carte choisie et la mélange avec son deck.",
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Psyshot",
				'fr-fr': "Piqûre Psy",
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It seeks drifting will-o'-the-wisps and sucks them into its empty body. What happens inside is a mystery.",
	},

	thirdParty: {
		cardmarket: 280649,
		tcgplayer: 85031
	}
}

export default card
