import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Rhyperior V",
	},

	illustrator: "Eske Yoshinob",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,
	hp: 230,

	types: [
		"Fightning",
	],

	attacks: [
		{
			cost: [
				"Fightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Drill Run",
			},
			effect: {
				en: "Discard an Energy from your opponent’s Active Pokémon.",
			},
			damage: 80,

		},
		{
			cost: [
				"Fightning",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Heavy Rock Artillery",
			},
			effect: {
				en: "During your next turn, this Pokémon can’t use Heavy Rock Artillery.",
			},
			damage: 210,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 4,
	regulationMark: "D"
}

export default card
