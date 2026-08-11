import { Card } from 'models/database/card'
import Set from '../Skyridge'

const card: Card = {
	name: {
		'en-us': "Farfetch'd",
		'de-de': "Porenta"
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [83],

	hp: 50,

	types: [
		"Colorless"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Whirlwind",
				'de-de': "Wirbelwind"
			},
			effect: {
				'en-us': "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon.",
				'de-de': "Dein Gegner tauscht das verteidigende Pokémon mit 1 der Pokémon auf seiner Bank aus."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Leek Rush",
				'de-de': "Lauchhieb"
			},
			effect: {
				'en-us': "Flip a coin until you get tails. This attack does 10 damage times the number of heads.",
				'de-de': "Wirf eine Münze, bis du \"Zahl\" wirfst. Dieser Angriff fügt 10 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "10×",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],
	retreat: 1,


	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 85383,
				cardmarket: 275313
			},
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 85383,
				cardmarket: 275313
			},
		},
	],
}

export default card
