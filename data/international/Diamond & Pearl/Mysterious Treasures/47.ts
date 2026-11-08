import { Card } from 'models/database/card'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		'en-us': "Dunsparce",
		'fr-fr': "Insolourdo",
		'de-de': "Dummisel"
	},

	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		206,
	],

	hp: 60,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				'en-us': "Snake Hook",
				'fr-fr': "Crochet de serpent",
				'de-de': "Schlangenhaken"
			},
			effect: {
				'en-us': "Draw a card.",
				'fr-fr': "Piochez une carte.",
				'de-de': "Ziehe 1 Karte."
			},

		},
		{

			name: {
				'en-us': "Bite and Run",
				'fr-fr': "Mordre et courrir",
				'de-de': "Zubeißen und Abhauen"
			},
			effect: {
				'en-us': "Switch Dunsparce with 1 of your Benched Pokémon.",
				'fr-fr': "Échangez Insolourdo avec 1 de vos Pokémon de Banc.",
				'de-de': "Tausche Dummisel gegen 1 Pokémon auf deiner Bank aus."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+10"
		},
	],
	retreat: 1,


	description: {
		'en-us': "It digs into the ground with its tail and makes a mazelike nest. It can fly just a little.",
		'fr-fr': "Son nid est un véritable labyrinthe qu'il creuse à l'aide de sa queue. Il sait à peine voler."
	},

	thirdParty: {
		cardmarket: 277676,
		tcgplayer: 85010
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		}
	]
}

export default card
