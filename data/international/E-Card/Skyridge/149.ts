import { Card } from 'models/database/card'
import Set from '../Skyridge'

const card: Card = {
	name: {
		'en-us': "Ho-oh",
		'de-de': "Ho-oh"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [250],

	hp: 80,

	types: [
		"Colorless"
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Crystal Type",
				'de-de': "Kristall-Typ"
			},
			effect: {
				'en-us': "Whenever you attach a Fire, Water, or Lightning basic Energy card from your hand to Ho-oh, Ho-oh's type (color) becomes the same as that type of Energy until the end of the turn.",
				'de-de': "Immer wenn du eine -, - oder -Basis-Energiekarte aus deiner Hand an Ho-oh anlegst, ändert sich Ho-ohs Typ (Farbe) bis zum Ende des Zuges zu dem gleichen Typ wie diese Energie."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Lightning",
			],
			name: {
				'en-us': "Holy Flame",
				'de-de': "Heilige Flamme"
			},

			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Scalding Steam",
				'de-de': "Siedend heißer Dampf"
			},
			effect: {
				'en-us': "Discard an Energy card attached to Ho-oh and flip a coin. If heads, the Defending Pokémon is now Burned.",
				'de-de': "Lege eine an Ho-oh angelegte Energiekarte auf deinen Ablagestapel und wirf eine Münze. Bei \"Kopf\" ist das verteidigende Pokémon jetzt verbrannt."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "x2"
		},
	],
	retreat: 3,


	variants: [
		{
			type: 'holo',
			thirdParty: {
				tcgplayer: 86121,
				cardmarket: 362907
			},
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 86121,
				cardmarket: 362907
			},
		},
		{
			type: 'holo',
			foil: 'cracked-ice',
			size: 'jumbo',
			thirdParty: {
				tcgplayer: 210854
			}
		}
	],
}

export default card
