import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Gliscor",
		fr: "Scorvol",
	},
	illustrator: "Mizue",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		472,
	],
	hp: 110,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Gligar",
		fr: "Scorplane",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Collect",
				fr: "Collecte",
			},
			effect: {
				en: "Draw 3 cards.",
				fr: "Piochez 3 cartes.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Poison Jab",
				fr: "Direct Toxik",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Poisoned.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
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

	retreat: 1,



}

export default card
