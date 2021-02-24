import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Clefable",
	},
	illustrator: "Saya Tsuruta",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 100,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Clefairy",
	},


	abilities: [
		{
			type: "Ability",
			name: {
				en: "Lunar Blessing",
			},
			effect: {
				en: "Once during your turn, if your Active Pokémon has any Psychic Energy attached, you may heal 20 damage from it, and it recovers from a Special Condition.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Magical Shot",
			},

			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
