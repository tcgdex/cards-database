import { Card } from 'models/database/card'
import Set from '../HS trainer Kit (Raichu)'

const card: Card = {
	name: {
		'en-us': "Raichu",
		'fr-fr': "Raichu"
	},

	illustrator: "match",
	rarity: "None",
	category: "Pokemon",
	set: Set,
	dexId: [26],
	hp: 90,
	types: [
		"Lightning",
	],
	evolveFrom: {
		'en-us': "Pikachu",
	},
	stage: "Stage1",
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Iron Tail",
				'fr-fr': "Queue de fer"
			},
			effect: {
				'en-us': "Flip a coin until you get tails. This attack does 30 damage times the number of heads.",
			},
			damage: "30×",
		},
		{
			cost: [
				"Lightning",
				"Lightning",
			],
			name: {
				'en-us': "Thunderbolt",
				'fr-fr': "Tonnerre",
			},
			effect: {
				'en-us': "Discard all Energy attached to Raichu.",
				'fr-fr': "Défaussez toutes les cartes Énergie attachées à Raichu."
			},
			damage: 100,
		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 0,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 279096,
				tcgplayer: 88520,
			},
		},
	],
}

export default card
