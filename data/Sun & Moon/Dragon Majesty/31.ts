import { Card } from '../../../interfaces'
import Set from '../Dragon Majesty'

const card: Card = {
	name: {
		en: "Wishiwashi",
		fr: "Froussardine",
	},
	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		746,
	],
	hp: 30,
	types: [
		"Water",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Meet Up",
				fr: "Assemblée",
			},
			effect: {
				en: "Your Wishiwashi-GX in play get +20 HP, and their attacks do 20 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).",
				fr: "Vos Froussardine-GX en jeu reçoivent +20 PV et leurs attaques infligent 20 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Water Gun",
				fr: "Pistolet à O",
			},

			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
