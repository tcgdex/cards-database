import { Card } from '../../../interfaces'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		en: "Turtonator",
		fr: "Boumata",
	},
	illustrator: "Anesaki Dynamic",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		776,
	],
	hp: 130,
	types: [
		"Fire",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Searing Flame",
				fr: "Flammes Calcinantes",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Burned.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
			},
			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Steam Artillery",
				fr: "Artillerie Vapeur",
			},

			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
