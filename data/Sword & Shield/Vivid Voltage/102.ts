import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Zamazenta",
	},
	illustrator: "aky CG Works",
	rarity: "Secret Rare",
	category: "Pokemon",

	set: Set,

	hp: 110,
	types: [
		"Fighting",
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
				"Lightning",
				"Fighting",
				"Metal",
			],
			name: {
				en: "Amazing Shield",
			},
			effect: {
				en: "During your opponent’s next turn, prevent all damage done to this Pokémon by attacks from Pokémon VMAX.",
			},
			damage: 180,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
