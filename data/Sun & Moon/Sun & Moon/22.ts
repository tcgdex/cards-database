import { Card } from '../../../interfaces'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		en: "Arcanine",
		fr: "Arcanin",
	},
	illustrator: "kodama",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		59,
	],
	hp: 130,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Growlithe",
		fr: "Caninos",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Searing Flame",
				fr: "Flammes Calcinantes",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Burned.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
			},
			damage: 60,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Firestorm",
				fr: "Orage de Flammes",
			},
			effect: {
				en: "Discard 3 Fire Energy from this Pokémon.",
				fr: "Défaussez 3 Énergies Fire de ce Pokémon.",
			},
			damage: 190,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
