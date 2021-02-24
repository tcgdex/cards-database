import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Rhyhorn",
		fr: "Rhinocorne",
	},
	illustrator: "sui",
	rarity: "Common",
	category: "Pokemon",

	set: Set,

	hp: 90,
	types: [
		"Fightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fightning",
				"Colorless",
			],
			name: {
				en: "Stomp Off",
				fr: "Tohu-Bohu",
			},
			effect: {
				en: "Discard the top 2 cards of your opponent’s deck.",
				fr: "Défaussez les 2 cartes du dessus du deck de votre adversaire.",
			},

		},
		{
			cost: [
				"Fightning",
				"Fightning",
				"Colorless",
			],
			name: {
				en: "Land Crush",
				fr: "Écras’Terre",
			},

			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
