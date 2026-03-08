import { Card } from '../../../interfaces'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		en: "Electrike",
		fr: "Dynavolt",
		de: "Frizelbliz"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		309,
	],

	hp: 50,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Charge",
				fr: "Recharge",
				de: "Charge"
			},
			effect: {
				en: "Attach a Lightning Energy from your discard pile to Electrike.",
				fr: "Attachez une carte Énergie  de votre pile de défausse à Dynavolt.",
				de: "Attack a  Energy card from your discard pile to Electrike."
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Thunder Jolt",
				fr: "Secousse tonnerre",
				de: "Thunder Jolt"
			},
			effect: {
				en: "Flip a coin. If tails, Electrike does 10 damage to itself.",
				fr: "Lancez une pièce. Si c'est pile, Dynavolt s'inflige 10 dégâts.",
				de: "Flip a coin. If tails, Electrike does 10 damage to itself."
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

	thirdParty: {
		cardmarket: 275678,
		tcgplayer: 85128
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		},
	]
}

export default card
