import { Card } from 'models/database/card'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		'en-us': "Baltoy",
		'fr-fr': "Balbuto",
		'es-es': "Baltoy",
		'it-it': "Baltoy",
		'pt-br': "Baltoy",
		'de-de': "Puppance"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		343,
	],

	hp: 60,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Spinning Attack",
				'fr-fr': "Attaque Tournante",
			},

			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Reverse Spin",
				'fr-fr': "Vrille Renversante",
			},
			effect: {
				'en-us': "Your opponent shuffles his or her hand into his or her deck and draws 4 cards.",
				'fr-fr': "Votre adversaire mélange sa main avec son deck et pioche 4 cartes.",
			},

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It move by spinning on its foot. It is a rare Pokémon that was discovered in ancient ruins.",
	},

	thirdParty: {
		cardmarket: 280502,
		tcgplayer: 83718
	}
}

export default card
