import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Masquerain",
	},
	illustrator: "chibi",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,



	evolveFrom: {
		en: "Surskit",
	},



	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Threatening Pattern",
			},
			effect: {
				en: "During your opponent’s next turn, Energy can’t be attached from your opponent's hand to the Defending Pokémon.",
			},
			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "U-turn",
			},
			effect: {
				en: "Switch this Pokémon with 1 of your Benched Pokémon.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
