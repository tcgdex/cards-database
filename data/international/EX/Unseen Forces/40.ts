import { Card } from 'models/database/card'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		'en-us': "Lanturn",
		'fr-fr': "Lanturn",
		'de-de': "Lanturn"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		171,
	],

	hp: 80,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'en-us': "Chinchou",
		'fr-fr': "Loupio"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Energy Stream",
				'fr-fr': "Courant d'énergie",
				'de-de': "Energy Stream"
			},
			effect: {
				'en-us': "Search your discard pile for a basic Energy card and attach it to Lanturn.",
				'fr-fr': "Choisissez dans votre pile de défausse une carte Énergie de base et attachez-la à Lanturn.",
				'de-de': "Search your discard pile for a basic Energy card and attach it to Lanturn."
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Take Down",
				'fr-fr': "Bélier",
				'de-de': "Take Down"
			},
			effect: {
				'en-us': "Lanturn does 10 damage to itself.",
				'fr-fr': "Lanturn s'inflige 10 dégâts.",
				'de-de': "Lanturn does 10 damage to itself."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 86605,
				cardmarket: 276686
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 86605,
				cardmarket: 276686
			},
		}
	],
}

export default card
