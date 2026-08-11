import { Card } from 'models/database/card'
import Set from '../Skyridge'

const card: Card = {
	name: {
		'en-us': "Moltres",
		'de-de': "Lavados"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [146],

	hp: 80,

	types: [
		"Fire"
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Fire Immunity",
				'de-de': "Feuer-Immunität"
			},
			effect: {
				'en-us': "You can't attach Fire Energy cards from your hand to Moltres.",
				'de-de': "Du kannst keine -Energiekarten aus deiner Hand an Lavados anlegen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Collect Fire",
				'de-de': "Feuersammeln"
			},
			effect: {
				'en-us': "If there are any Fire Energy cards in your discard pile, flip a coin. If heads, attach 1 of them to Moltres.",
				'de-de': "Wenn mindestens eine -Energiekarte in deinem Ablagestapel ist, wirf eine Münze. Lege bei \"Kopf\" eine davon an Lavados an."
			},
			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Burning Tail",
				'de-de': "Brennender Schweif"
			},
			effect: {
				'en-us': "Flip a coin. If tails, discard a Fire Energy card attached to Moltres.",
				'de-de': "Wirf eine Münze. Lege bei \"Zahl\" eine an Lavados angelegte -Energiekarte auf deinen Ablagestapel."
			},
			damage: 60,

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
			value: "-30"
		},
	],
	retreat: 2,


	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 87558,
				cardmarket: 275230
			},
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 87558,
				cardmarket: 275230
			},
		},
	],
}

export default card
