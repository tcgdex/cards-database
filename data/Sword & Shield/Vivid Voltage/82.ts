import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Zacian",
	},
	illustrator: "Shin Nagasawa",
	rarity: "Secret Rare",
	category: "Pokemon",

	set: Set,

	hp: 110,
	types: [
		"Psychic",
	],




	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Metal Armament",
			},
			effect: {
				en: "Attach a basic Energy card from your discard pile to this Pokémon.",
			},
			damage: 30,

		},
		{
			cost: [
				"Grass",
				"Psychic",
				"Metal",
			],
			name: {
				en: "Amazing Sword",
			},
			effect: {
				en: "If your opponent has any Pokémon VMAX in play, this attack does 150 more damage.",
			},
			damage: "150+",

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
