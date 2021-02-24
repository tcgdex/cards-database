import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Falinks",
	},
	illustrator: "Misa Tsutsui",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,







	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Call for Family",
			},
			effect: {
				en: "Search your deck for up to 2 Basic Pokémon and put them onto your Bench. Then, shuffle your deck.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Team Attack",
			},
			effect: {
				en: "This attack does 30 damage for each of your Benched Pokémon that has \"Falinks\" in its name.",
			},
			damage: "30×",

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
