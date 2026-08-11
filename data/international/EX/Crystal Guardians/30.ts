import { Card } from 'models/database/card'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		'en-us': "Charmeleon δ",
		'fr-fr': "Reptincel δ",
		'de-de': "Glutexo"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		5,
	],

	hp: 70,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'en-us': "Charmander",
		'fr-fr': "Salamèche"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Slash",
				'fr-fr': "Tranche",
				'de-de': "Schlitzer"
			},

			damage: 20,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Thunder Jolt",
				'fr-fr': "Secousse tonnerre",
				'de-de': "Donnerrüttler"
			},
			effect: {
				'en-us': "Flip a coin. If tails, Charmeleon does 10 damage to itself.",
				'fr-fr': "Lancez une pièce. Si c'est pile, Reptincel s'inflige 10 dégâts.",
				'de-de': "Wirf 1 Münze. Bei \"Zahl\" fügt sich Glutexo selbst 10 Schadenspunkte zu."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],


	retreat: 1,

	thirdParty: {
		cardmarket: 277111
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card
