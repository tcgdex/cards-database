import { Card } from 'models/database/card'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		'en-us': "Ho-Oh",
		'fr-fr': "Ho-Oh",
		'de-de': "Ho-Oh"
	},

	illustrator: "Hideaki Hakozaki",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [250],

	hp: 100,

	types: [
		"Fire"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Combustion",
				'fr-fr': "Fournaise",
				'de-de': "Glühen"
			},

			damage: 50,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Scorching Wing",
				'fr-fr': "Aile brûlante",
				'de-de': "Versengende Schwingen"
			},
			effect: {
				'en-us': "Flip a coin. If tails, discard all Fire Energy attached to Ho-Oh.",
				'fr-fr': "Lancez une pièce. Si c’est pile, défaussez toutes les Énergies Fire attachées à Ho-Oh.",
				'de-de': "Wirf eine Münze. Bei \"Zahl\" lege alle an Ho-Oh angelegten -Energien auf deinen Ablagestapel."
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 3,

	description: {
		'en-us': "Legends claim this Pokémon flies the world's skies continuously on its magnificent seven-colored wings.",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 86127,
				cardmarket: 279652
			},
		},
	],

}

export default card
