import { Card } from 'models/database/card'
import Set from '../Neo Discovery'

const card: Card = {
	name: {
		'en-us': "Caterpie",
		'fr-fr': "Chenipan",
		'de-de': "Raupy"
	},

	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		10,
	],

	hp: 50,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Spin Tackle",
				'fr-fr': "Charge vrille",
				'de-de': "Drehtackle"
			},
			effect: {
				'en-us': "Caterpie does 10 damage to itself.",
				'fr-fr': "Chenipan s'inflige 10 dégâts.",
				'de-de': "Raupy fügt sich selbst 10 Schadenspunkte zu."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		'en-us': "For protection, it releases a horrible stench from the antennae on its head to drive away enemies.",
		'fr-fr': "Pour se protéger, une horrible puanteur émane de ses antennes pour repousser ses ennemis."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274564,
				tcgplayer: 84133
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274564,
				tcgplayer: 84133
			}
		}
	]
}

export default card

