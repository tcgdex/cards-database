import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Centiskorch",
		fr: "Scolocendre",
	},
	illustrator: "Anesaki Dynamic",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 130,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Sizzlipede",
		fr: "Grillepattes",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Hundred Foot Flames",
				fr: "Flammes Mille-Pattes",
			},
			effect: {
				en: "For each Fire Energy attached to this Pokémon, discard the top card of your opponent’s deck.",
				fr: "Pour chaque Énergie Fire attachée à ce Pokémon, défaussez la carte du dessus du deck de votre adversaire.",
			},

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Searing Flame",
				fr: "Flammes Calcinantes",
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Burned.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
			},
			damage: 110,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
