import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Tangela",
		fr: "Saquedeneu",
	},
	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		114,
	],
	hp: 80,
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
				en: "Tangle Drag",
				fr: "Lasso Piège",
			},
			effect: {
				en: "Switch 1 of your opponent's Benched Pokémon with their Active Pokémon.",
				fr: "Échangez l’un des Pokémon de Banc de votre adversaire avec son Pokémon Actif.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Gentle Slap",
				fr: "Gifle Douce",
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
