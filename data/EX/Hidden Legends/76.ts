import { Card } from '../../../interfaces'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		en: "Surskit",
	},
	illustrator: "Toshinao Aoki",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		283,
	],
	hp: 50,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Splash About",
			},
			effect: {
				en: "If Surskit has less Energy attached to it than the Defending Pokémon, this attack does 10 damage plus 10 more damage.",
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],





}

export default card
