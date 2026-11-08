import { Card } from 'models/database/card'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		'en-us': "Mandibuzz",
		'fr-fr': "Vaututrice",
		'es-es': "Mandibuzz",
		'it-it': "Mandibuzz",
		'pt-br': "Mandibuzz",
		'de-de': "Grypheldis"
	},

	illustrator: "Naoki Saito",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		630,
	],

	hp: 90,

	types: [
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Vullaby",
		'fr-fr': "Vostourno",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "Gust",
				'fr-fr': "Tornade",
			},

			damage: 30,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Dual Cut",
				'fr-fr': "Coupe Double",
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 80 damage times the number of heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 80 dégâts multipliés par le nombre de côtés face.",
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
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
		'en-us': "It makes a nest out of the bones it finds. It grabs weakened prey in its talons and hauls it to its nest of bones.",
	},

	thirdParty: {
		cardmarket: 280680,
		tcgplayer: 87152
	}
}

export default card
