import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Cutiefly",
		fr: "Bombydou",
	},
	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		742,
	],
	hp: 30,
	types: [
		"Fairy",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Sweet Scent",
				fr: "Doux Parfum",
			},
			effect: {
				en: "Heal 30 damage from 1 of your Pokémon.",
				fr: "Soignez 30 dégâts à l’un de vos Pokémon.",
			},

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],




}

export default card
