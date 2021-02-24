import { Card } from '../../../interfaces'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		en: "Crawdaunt",
		fr: "Colhomard",
	},
	illustrator: "Saya Tsuruta",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		342,
	],
	hp: 110,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Corphish",
		fr: "Écrapince",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Double Claws",
				fr: "Doubles Griffes",
			},
			effect: {
				en: "Discard 2 Energy from your opponent's Active Pokémon.",
				fr: "Défaussez 2 Énergies du Pokémon Actif de votre adversaire.",
			},
			damage: 80,

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
