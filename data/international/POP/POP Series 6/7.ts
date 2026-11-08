import { Card } from 'models/database/card'
import Set from '../POP Series 6'

const card: Card = {
	name: {
		'en-us': "Gible",
		'fr-fr': "Gible"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [443],

	hp: 50,

	types: [
		"Colorless"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],

			name: {
				'en-us': "Surprise Attack",
				'fr-fr': "Attaque surprise"
			},

			effect: {
				'en-us': "Flip a coin. If tails, this attack does nothing.",
				'fr-fr': "Lancez une pièce. Si c'est pile, cette attaque est sans effet."
			},

			damage: 30,
		},
	],

	weaknesses: [
		{
			type: "Colorless",
			value: "+10"
		},
	],
	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85699,
				cardmarket: 277892
			},
		},
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 85699,
				cardmarket: 277892
			},
		},
	],

}

export default card
