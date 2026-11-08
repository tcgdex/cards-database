import { Card } from 'models/database/card'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		'en-us': "Chansey",
		'fr-fr': "Leveinard",
		'de-de': "Chaneira"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [113],

	hp: 100,

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
				'en-us': "Rollout",
				'fr-fr': "Roulade",
				'de-de': "Walzer"
			},

			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Double-edge",
				'fr-fr': "Damoclès",
				'de-de': "Risikotackle"
			},
			effect: {
				'en-us': "Chansey does 40 damage to itself.",
				'fr-fr': "Leveinard s'inflige 40 dégâts.",
				'de-de': "Chaneira fügt sich selber 40 Schadenspunkte zu."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "x2"
		},
	],
	retreat: 2,


	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 84171,
				cardmarket: 275142
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 84171,
				cardmarket: 275142
			}
		},
	]
}

export default card
