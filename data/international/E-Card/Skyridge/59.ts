import { Card } from 'models/database/card'
import Set from '../Skyridge'

const card: Card = {
	name: {
		'en-us': "Gligar",
		'de-de': "Skorgla"
	},

	illustrator: "Shin-ichi Yoshida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [207],

	hp: 60,

	types: [
		"Fighting"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Irongrip",
				'de-de': "Eiserner Griff"
			},

			damage: 10,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],

			name: {
				'en-us': "Sharp Stinger",
				'de-de': "Scharfer Stich"
			},

			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Poisoned. If tails, the Defending Pokémon is now Paralyzed.",
				'de-de': "Wirf eine Münze. Bei 'Kopf' ist das verteidigende Pokémon jetzt vergiftet. Bei 'Zahl' ist das verteidigende Pokémon jetzt gelähmt."
			},

			damage: 10,
		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 85763,
				cardmarket: 275317
			},
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 85763,
				cardmarket: 275317
			},
		},
	],
}

export default card
