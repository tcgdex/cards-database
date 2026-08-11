import { Card } from 'models/database/card'
import Set from '../Skyridge'

const card: Card = {
	name: {
		'en-us': "Voltorb",
		'de-de': "Voltobal"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [100],

	hp: 50,

	types: [
		"Lightning"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Magnetic Pull",
				'de-de': "Magnetische Anziehung"
			},
			effect: {
				'en-us': "If your opponent has any Benched Pokémon, choose 1 of them and switch it with the Defending Pokémon.",
				'de-de': "Wenn auf der Bank deines Gegners Pokémon vorhanden sind, wähle eines von diesen und tausche es mit dem verteidigenden Pokémon aus."
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Spin Tackle",
				'de-de': "Drehtackle"
			},
			effect: {
				'en-us': "Voltorb does 10 damage to itself.",
				'de-de': "Voltobal fügt sich selber 10 Schadenspunkte zu."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 90411,
				cardmarket: 275371
			},
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 90411,
				cardmarket: 275371
			},
		},
	],
}

export default card
