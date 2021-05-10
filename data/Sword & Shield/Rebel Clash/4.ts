import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Scyther",
	},

	illustrator: "KEIICHIRO ITO",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Swords Dance",
			},
			effect: {
				en: "During your next turn, this Pokémon’s Blinding Scythe attack does 70 more damage (before applying Weakness and Resistance).",
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Blinding Scythe",
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D"
}

export default card
