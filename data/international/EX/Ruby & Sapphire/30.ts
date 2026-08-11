import { Card } from 'models/database/card'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		'en-us': "Electrike",
		'fr-fr': "Dynavolt",
		'de-de': "Frizelbliz"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [309],

	hp: 50,

	types: [
		"Lightning"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Charge",
				'fr-fr': "Recharge",
				'de-de': "Charge"
			},
			effect: {
				'en-us': "Attach a Lightning Energy card from your discard pile to Electrike.",
				'fr-fr': "Attachez une carte Énergie  de votre pile de défausse à Dynavolt.",
				'de-de': "Attack a  Energy card from your discard pile to Electrike."
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Thunder Jolt",
				'fr-fr': "Secousse tonnerre",
				'de-de': "Thunder Jolt"
			},
			effect: {
				'en-us': "Flip a coin. If tails, Electrike does 10 damage to itself.",
				'fr-fr': "Lancez une pièce. Si c'est pile, Dynavolt s'inflige 10 dégâts.",
				'de-de': "Flip a coin. If tails, Electrike does 10 damage to itself."
			},
			damage: 30,

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
			value: "-30"
		},
	],


	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275678,
				tcgplayer: 85128
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275678,
				tcgplayer: 85128
			}
		},
	],

}

export default card
