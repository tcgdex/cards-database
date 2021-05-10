import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Bunnelby",
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 40,

	types: [
		"Colorless",
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Mad Party",
			},
			effect: {
				en: "This attack does 20 damage for each Pokémon in your discard pile that has the Mad Party attack.",
			},
			damage: "20×",

		},
	],

	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D"
}

export default card
