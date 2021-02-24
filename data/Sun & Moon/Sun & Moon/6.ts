import { Card } from '../../../interfaces'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		en: "Pinsir",
		fr: "Scarabrute",
	},
	illustrator: "DemizuPosuka",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		127,
	],
	hp: 110,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Roof Fling",
				fr: "Lance Auvent",
			},
			effect: {
				en: "Flip a coin. If heads, put your opponent's Active Pokémon and all cards attached to it into your opponent's hand.",
				fr: "Lancez une pièce. Si c'est face, placez le Pokémon Actif de votre adversaire et toutes les cartes qui lui sont attachées dans la main de votre adversaire.",
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Guillotine",
				fr: "Guillotine",
			},

			damage: 50,

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
