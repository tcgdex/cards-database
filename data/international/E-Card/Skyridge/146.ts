import { Card } from 'models/database/card'
import Set from '../Skyridge'

const card: Card = {
	name: {
		'en-us': "Charizard",
		'de-de': "Glurak"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [6],

	hp: 110,

	types: [
		"Colorless"
	],

	evolveFrom: {
		'en-us': "Charmeleon",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Crystal Type",
				'de-de': "Kristall-Typ"
			},
			effect: {
				'en-us': "Whenever you attach a Fire, Lightning, or Fighting basic Energy card from your hand to Charizard, Charizard's type (color) becomes the same as that type of Energy until the end of the turn.",
				'de-de': "Immer wenn du eine -, - oder -Basis-Energiekarte aus deiner Hand an Glurak anlegst, ändert sich Gluraks Typ (Farbe) bis zum Ende des Zuges zu dem gleichen Typ wie diese Energie."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Fighting",
			],
			name: {
				'en-us': "Fireblast",
				'de-de': "Feuerstoß"
			},
			effect: {
				'en-us': "Discard an Energy card attached to Charizard.",
				'de-de': "Lege eine an Glurak angelegte Energiekarte auf deinen Ablagestapel."
			},
			damage: 40,

		},
		{
			cost: [
				"Fire",
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Dragon Tail",
				'de-de': "Drachenschwanz"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 50 damage times the number of heads.",
				'de-de': "Wirf 2 Münzen. Dieser Angriff fügt 50 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "50×",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "x2"
		},
	],
	retreat: 4,


	variants: [
		{
			type: 'holo',
			thirdParty: {
				tcgplayer: 84186,
				cardmarket: 275404
			},
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 84186,
				cardmarket: 275404
			},
		},
		{
			type: 'holo',
			foil: 'cracked-ice',
			size: 'jumbo',
			thirdParty: {
				tcgplayer: 210851
			}
		}
	],
}

export default card
