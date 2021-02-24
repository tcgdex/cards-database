import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Feebas",
	},
	illustrator: "HYOGONOSUKE",
	rarity: "Common",
	category: "Pokemon",

	set: Set,

	hp: 30,
	types: [
		"Water",
	],




	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Nap",
			},
			effect: {
				en: "Heal 20 damage from this Pokémon.",
			},

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
