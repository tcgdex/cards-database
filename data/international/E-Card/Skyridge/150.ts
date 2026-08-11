import { Card } from 'models/database/card'
import Set from '../Skyridge'

const card: Card = {
	name: {
		'en-us': "Kabutops",
		'de-de': "Kabutops"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [141],

	hp: 90,

	types: [
		"Colorless"
	],

	evolveFrom: {
		'en-us': "Kabuto",
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
				'en-us': "Whenever you attach a Water, Lightning, or Fighting basic Energy card from your hand to Kabutops, Kabutops's type (color) becomes the same as that type of Energy until the end of the turn.",
				'de-de': "Immer wenn du eine  -,  -oder eine  - Basis Energiekarte aus deiner Hand an Kabutops anlegst, ändert sich Kabutops'Typ (Farbe) bis zum Ende des Zuges zum gleichen Typ wie diese Energie."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Fighting",
			],
			name: {
				'en-us': "Draining Cut",
				'de-de': "Entwäserungsschnitt"
			},
			effect: {
				'en-us': "Remove a damage counter from Kabutops.",
				'de-de': "Entferne eine Schadensmarke von Kabutops."
			},
			damage: 20,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Triple Cutter",
				'de-de': "Dreifachklinge"
			},
			effect: {
				'en-us': "Flip 3 coins. This attack does 30 damage times the number of heads.",
				'de-de': "Wirf 3 Münzen. Dieser Angriff fügt 30 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "30×",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "x2"
		},
	],
	retreat: 3,


	variants: [
		{
			type: 'holo',
			thirdParty: {
				tcgplayer: 86396,
				cardmarket: 275272
			},
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 86396,
				cardmarket: 275272
			},
		},
		{
			type: 'holo',
			foil: 'cracked-ice',
			size: 'jumbo',
			thirdParty: {
				tcgplayer: 210853
			}
		}
	],
}

export default card
