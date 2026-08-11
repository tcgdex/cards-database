import { Card } from 'models/database/card'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		'en-us': "Vaporeon",
		'fr-fr': "Aquali",
		'de-de': "Aquana"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [134],

	hp: 70,

	types: [
		"Water"
	],

	evolveFrom: {
		'en-us': "Eevee",
		'fr-fr': "Évoli"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Aurora Beam",
				'fr-fr': "Onde boréale",
				'de-de': "Aurora Beam"
			},

			damage: 30,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Aqua Sonic",
				'fr-fr': "Aquasonique",
				'de-de': "Aqua Sonic"
			},
			effect: {
				'en-us': "This attack's damage is not affected by Resistance.",
				'fr-fr': "Les dégâts infligés par cette attaque ne sont pas affectés par la Résistance.",
				'de-de': "This attack's damage is not affected by Resistance."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275802,
				tcgplayer: 90278
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275802,
				tcgplayer: 90278
			}
		},
	],

}

export default card
