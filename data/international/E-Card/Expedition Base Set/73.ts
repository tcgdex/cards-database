import { Card } from 'models/database/card'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		'en-us': "Charmeleon",
		'fr-fr': "Reptincel",
		'de-de': "Glutexo"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [5],

	hp: 80,

	types: [
		"Fire"
	],

	evolveFrom: {
		'en-us': "Charmander",
		'fr-fr': "Salamèche"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Double Scratch",
				'fr-fr': "Double griffe",
				'de-de': "Doppelkratzer"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 20 damage times the number of heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de faces.",
				'de-de': "Wirf 2 Münzen. Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "20×",

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Flamethrower",
				'fr-fr': "Lance-flammes",
				'de-de': "Flammenwurf"
			},
			effect: {
				'en-us': "Discard 1 Fire Energy card attached to Charmeleon.",
				'fr-fr': "Défaussez-vous d'une carte Énergie  attachée à Reptincel.",
				'de-de': "Lege 1 an Glutexo angelegte -Energiekarte auf deinen Ablagestapel."
			},
			damage: 50,

		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84224,
				cardmarket: 274948
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 84224,
				cardmarket: 274948
			},
		},
	],
}

export default card
