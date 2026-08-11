import { Card } from 'models/database/card'
import Set from '../Holon Phantoms'

const card: Card = {
	name: {
		'en-us': "Donphan",
		'fr-fr': "Donphan",
		'de-de': "Donphan"
	},

	illustrator: "Hisao Nakamura",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		232,
	],

	hp: 80,

	types: [
		"Fighting",
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
			],
			name: {
				'en-us': "Rock Hurl",
				'fr-fr': "Lance-pierre",
				'de-de': "Steinschleuderer"
			},
			effect: {
				'en-us': "This attack's damage isn't affected by Resistance.",
				'fr-fr': "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
				'de-de': "Der Schaden dieses Angriffs wird durch die Resistenz des Verteidigenden Pokémon nicht verringert."
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Double Spin",
				'fr-fr': "Double tour",
				'de-de': "Doppeldreher"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 50 damage times the number of heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 50 dégâts multipliés par le nombre de faces.",
				'de-de': "Wirf 2 Münzen. Dieser Angriff fügt 50 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "50x",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 277010,
		tcgplayer: 84875
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		},
	]
}

export default card
