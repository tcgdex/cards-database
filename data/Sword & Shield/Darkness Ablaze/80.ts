import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Shiinotic",
	},

	illustrator: "Misa Tsutsui",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	hp: 110,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Morelull",
	},

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Flickering Light",
			},
			effect: {
				en: "Flip a coin. If heads, during your opponent’s next turn, the Defending Pokémon can’t attack.",
			},
			damage: 30,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Fear the Forest",
			},
			effect: {
				en: "If Glimwood Tangle is in play, this attack does 60 more damage.",
			},
			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D"
}

export default card
