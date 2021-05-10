import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Ninetales",
	},

	illustrator: "AKIRA EGAWA",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		en: "Vulpix",
	},

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Hex",
			},
			effect: {
				en: "If your opponent’s Active Pokémon is affected by a Special Condition, this attack does 90 more damage.",
			},
			damage: "30+",

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Flickering Flames",
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Asleep.",
			},
			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D"
}

export default card
