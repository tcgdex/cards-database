import { Card } from 'models/database/card'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		'en-us': "Mareep",
		'fr-fr': "Wattouat",
		'de-de': "Voltilamm"
	},

	illustrator: "Hizuki Misono",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [179],

	hp: 40,

	types: [
		"Lightning"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Charge",
				'fr-fr': "Recharge",
				'de-de': "Laden"
			},
			effect: {
				'en-us': "Attach 1 Lightning Energy card from your discard pile to Mareep.",
				'fr-fr': "Attachez une carte Énergie  de votre pile de défausse à Wattouat.",
				'de-de': "Lege eine -Energiekarte aus deinem Ablagestapel an Voltilamm an."
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Tail Slap",
				'fr-fr': "Attaque caudale",
				'de-de': "Schweifschlag"
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
				tcgplayer: 87195,
				cardmarket: 275167
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 87195,
				cardmarket: 275167
			}
		},
	]
}

export default card
