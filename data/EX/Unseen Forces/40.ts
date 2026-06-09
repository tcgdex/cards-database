import { Card } from '../../../interfaces'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		en: "Lanturn",
		fr: "Lanturn",
		de: "Lanturn"
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
		en: "Chinchou",
		fr: "Loupio"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Energy Stream",
				fr: "Courant d'énergie",
				de: "Energy Stream"
			},
			effect: {
				en: "Search your discard pile for a basic Energy card and attach it to Lanturn.",
				fr: "Choisissez dans votre pile de défausse une carte Énergie de base et attachez-la à Lanturn.",
				de: "Search your discard pile for a basic Energy card and attach it to Lanturn."
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
				en: "Take Down",
				fr: "Bélier",
				de: "Take Down"
			},
			effect: {
				en: "Lanturn does 10 damage to itself.",
				fr: "Lanturn s'inflige 10 dégâts.",
				de: "Lanturn does 10 damage to itself."
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

	thirdParty: {
		cardmarket: 276686,
		tcgplayer: 86605
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card
