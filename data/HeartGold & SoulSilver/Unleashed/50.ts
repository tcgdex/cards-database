import { Card } from '../../../interfaces'
import Set from '../Unleashed'

const card: Card = {
	name: {
		en: "Larvitar",
		fr: "Embrylex",
	},
	illustrator: "Sumiyoshi Kizuki",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		246,
	],
	hp: 50,
	types: [
		"Fighting",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Mountain Eater",
				fr: "Mange-montagne",
			},
			effect: {
				en: "Discard the top card of your opponent's deck. Then, remove 2 damage counters from Larvitar.",
				fr: "Défaussez la carte du dessus du deck de votre adversaire. Ensuite, retirez 2 marqueurs de dégât à Embrylex.",
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Reckless Charge",
				fr: "Attaque imprudente",
			},
			effect: {
				en: "Larvitar does 10 damage to itself.",
				fr: "Embrylex s'inflige 10 dégâts.",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
