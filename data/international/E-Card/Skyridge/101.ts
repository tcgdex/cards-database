import { Card } from 'models/database/card'
import Set from '../Skyridge'

const card: Card = {
	name: {
		'en-us': "Snubbull",
		'de-de': "Snubbull"
	},

	illustrator: "Hisao Nakamura",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [209],

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
				'en-us': "Scary Face",
				'de-de': "Grimasse"
			},
			effect: {
				'en-us': "Flip a coin. If heads, until the end of your opponent's next turn the Defending Pokémon can't attack or retreat.",
				'de-de': "Wirf eine Münze. Bei 'Kopf' kann das verteidigende Pokémon bis zum Ende des nächsten gegnerischen Zugs weder angreifen noch sich zurückziehen."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Bite",
				'de-de': "Biss"
			},

			damage: 20,

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
				tcgplayer: 89413,
				cardmarket: 275359
			},
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 89413,
				cardmarket: 275359
			},
		},
	],
}

export default card
