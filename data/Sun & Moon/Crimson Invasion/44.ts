import { Card } from '../../../interfaces'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		en: "Pumpkaboo",
		fr: "Pitrouille",
	},
	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		710,
	],
	hp: 60,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Astonish",
				fr: "Étonnement",
			},
			effect: {
				en: "Choose a random card from your opponent's hand. Your opponent reveals that card and shuffles it into their deck.",
				fr: "Choisissez une carte au hasard de la main de votre adversaire. Votre adversaire montre la carte choisie et la mélange avec son deck.",
			},

		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
