import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Lugia",
	},
	illustrator: "Hasuno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 130,
	types: [
		"Colorless",
	],




	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Gust",
			},

			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Energy Loop",
			},
			effect: {
				en: "Put an Energy attached to this Pokémon into your hand.",
			},
			damage: 120,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-30"
		},
	],
	retreat: 2,



}

export default card
