import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Lickitung",
		fr: "Excelangue",
	},
	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		108,
	],
	hp: 90,
	types: [
		"Colorless",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Stretch Tongue",
				fr: "Langue à rallonge",
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon. This attack does 10 damage to that Pokémon. This attack's damage isn't affected by Weakness or Resistance.",
				fr: "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 10 dégâts. Les dégâts de cette attaque ne sont pas affectés par la Faiblesse ou la Résistance.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Knock Off",
				fr: "Sabotage",
			},
			effect: {
				en: "Choose 1 card from your opponent's hand without looking and discard it.",
				fr: "Choisissez sans regarder une carte de la main de votre adversaire et défaussez-la.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "+20"
		},
	],

	retreat: 3,



}

export default card
