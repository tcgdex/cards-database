import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Pikachu V",
	},
	illustrator: "Saki Hayashiro",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,

	hp: 190,
	types: [
		"Lightning",
	],




	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Charge",
			},
			effect: {
				en: "Search your deck for up to 2 Lightning Energy cards and attach them to this Pokémon. Then, shuffle your deck.",
			},

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Thunderbolt",
			},
			effect: {
				en: "Discard all Energy from this Pokémon.",
			},
			damage: 200,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
