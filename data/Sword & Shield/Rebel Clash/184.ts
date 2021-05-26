import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Sandaconda V",
	},
	illustrator: "aky CG Works",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,







	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Sand Eater",
			},
			effect: {
				en: "Attach a Fighting Energy card from your discard pile to this Pokémon.",
			},
			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Sand Breath",
			},
			effect: {
				en: "Discard 2 Energy from this Pokémon.",
			},
			damage: 220,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
