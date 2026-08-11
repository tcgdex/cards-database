import { Card } from 'models/database/card'
import Set from '../Dragon'

const card: Card = {
	name: {
		'en-us': "Combusken",
		'fr-fr': "Galifeu",
		'de-de': "Jungglut"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [256],

	hp: 70,

	types: [
		"Fire"
	],

	evolveFrom: {
		'en-us': "Torchic",
		'fr-fr': "Poussifeu"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Quick Attack",
				'fr-fr': "Vive-attaque",
				'de-de': "Ruckzuckhieb"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 10 damage plus 20 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts.",
				'de-de': "Wirf 1 Münze. Bei 'Kopf' fügt dieser Angriff 10 Schadenspunkte plus 20 weitere Schadenspunkte zu."
			},
			damage: "10+",

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Combustion",
				'fr-fr': "Fournaise",
				'de-de': "Glühen"
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "x2"
		},
	],
	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84402,
				cardmarket: 275902
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 84402,
				cardmarket: 275902
			},
		},
	],

}

export default card
