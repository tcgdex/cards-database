import { Card } from '../../../interfaces'
import Set from '../Triumphant'

const card: Card = {
	name: {
		en: "Carvanha",
		fr: "Carvanha",
	},
	illustrator: "MAHOU",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		318,
	],
	hp: 50,
	types: [
		"Darkness",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Focus Energy",
				fr: "Puissance",
			},
			effect: {
				en: "During your next turn, Carvanha’s Bite attack’s base damage is 40.",
				fr: "Pendant votre prochain tour, l'attaque Morsure de Carvanha inflige 40 dégâts de base.",
			},

		},
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Bite",
				fr: "Morsure",
			},

			damage: 10,

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
