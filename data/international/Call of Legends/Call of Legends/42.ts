import { Card } from 'models/database/card'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		'en-us': "Donphan",
		'fr-fr': "Donphan",
		'de-de': "Donphan"
	},

	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [232],

	hp: 100,

	types: [
		"Fighting"
	],

	evolveFrom: {
		'en-us': "Phanpy",
		'fr-fr': "Phanpy"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Rock Hurl",
				'fr-fr': "Lance-pierre",
				'de-de': "Steinschleuderer"
			},
			effect: {
				'en-us': "This attack's damage isn't affected by Resistance.",
				'fr-fr': "Les dégâts infligés par cette attaque ne sont pas affectés par la Résistance.",
				'de-de': "Der Schaden dieses Angriffs wird durch Resistenz nicht verändert."
			},
			damage: 50,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Double Spin",
				'fr-fr': "Double tour",
				'de-de': "Doppeldreher"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 70 damage times the number of heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 70 dégâts multipliés par le nombre de faces.",
				'de-de': "Wirf 2 Münzen. Dieser Angriff fügt 70 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "70×",

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
			type: "Lightning",
			value: "-20"
		},
	],
	retreat: 3,


	description: {
		'en-us': "It has sharp, hard tusks and a rugged hide. Its tackle is strong enough to knock down a house.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84879,
				cardmarket: 279685
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 84879,
				cardmarket: 279685
			},
		},
	],

}

export default card
