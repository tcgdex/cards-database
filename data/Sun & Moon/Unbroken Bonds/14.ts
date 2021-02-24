import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Weepinbell",
		fr: "Boustiflor",
	},
	illustrator: "otumami",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		70,
	],
	hp: 80,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Bellsprout",
		fr: "Chétiflor",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Burning Venom",
				fr: "Venin Brûlant",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Burned and Poisoned.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé et Empoisonné.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Ram",
				fr: "Collision",
			},

			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
