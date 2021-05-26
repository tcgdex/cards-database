import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Flygon",
	},
	illustrator: "hatachu",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 150,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Vibrava",
	},


	abilities: [
		{
			type: "Ability",
			name: {
				en: "Labyrinth of Sand",
			},
			effect: {
				en: "As long as this Pokémon is in the Active Spot, your opponent’s Active Pokémon can’t retreat.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Desert Geyser",
			},
			effect: {
				en: "If your opponent has a Stadium in play, discard it. If you discarded a Stadium in this way, during your opponent’s next turn, prevent all damage from and effects of attacks done to this Pokémon.",
			},
			damage: 130,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
