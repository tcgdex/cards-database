import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Xatu",
	},
	illustrator: "so-taro",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,



	evolveFrom: {
		en: "Natu",
	},



	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Energy Warp",
			},
			effect: {
				en: "Move an Energy from 1 of your opponent's Benched Pokémon to their Active Pokémon.",
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Psychic",
			},
			effect: {
				en: "This attack does 30 more damage for each Energy attached to your opponent's Active Pokémon.",
			},
			damage: "10+",

		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-30"
		},
	],
	retreat: 1,



}

export default card
