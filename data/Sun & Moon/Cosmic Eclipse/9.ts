import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Heracross",
		fr: "Scarhino",
	},
	illustrator: "Satoshi Shirai",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		214,
	],
	hp: 130,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Lunge Out",
				fr: "Allonger",
			},

			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Riled Horn",
				fr: "Corne Irritée",
			},
			effect: {
				en: "If your opponent has any TAG TEAM Pokémon in play, this attack does 70 more damage.",
				fr: "Si votre adversaire a au moins un Pokémon ESCOUADE en jeu, cette attaque inflige 70 dégâts supplémentaires.",
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

	retreat: 3,



}

export default card
