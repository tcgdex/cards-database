import { Card } from 'models/database/card'
import Set from '../Neo Discovery'

const card: Card = {
	name: {
		'en-us': "Poliwrath",
		'fr-fr': "Tartard",
		'de-de': "Quappo"
	},

	illustrator: "Shin-ichi Yoshida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		62,
	],

	hp: 90,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Poliwhirl",
		'fr-fr': "Têtarte"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Corkscrew Punch",
				'fr-fr': "Poing tire-bouchon",
				'de-de': "Corkscrew Punch"
			},

			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Submission",
				'fr-fr': "Sacrifice",
				'de-de': "Submission"
			},
			effect: {
				'en-us': "Poliwrath does 20 damage to itself.",
				'fr-fr': "Tartard s'inflige 20 dégâts.",
				'de-de': "Poliwrath does 20 damage to itself"
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],
	retreat: 2,


	description: {
		'en-us': "Although an energetic, skilled swimmer that uses all of its muscles, it lives on dry land.",
		'fr-fr': "Bien qu'excellent nageur qui utilise tous ses muscles, il vit sur la terre ferme."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274520,
				tcgplayer: 88274
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274520,
				tcgplayer: 88274
			}
		}
	]
}

export default card

