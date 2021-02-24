import { Card } from '../../../interfaces'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		en: "Turtwig",
		fr: "Tortipouss",
	},
	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		387,
	],
	hp: 60,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Bite",
				fr: "Baie Kika",
			},
			effect: {
				fr: "Si Tortipouss est Confus, retirez-lui l'État Spécial Confus à la fin du tour de chaque joueur.",
			},
			damage: 30,

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				fr: "Morsure",
			},

			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+10"
		},
	],
	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
