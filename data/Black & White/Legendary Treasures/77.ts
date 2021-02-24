import { Card } from '../../../interfaces'
import Set from '../Legendary Treasures'

const card: Card = {
	name: {
		en: "Chandelure-EX",
	},
	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		609,
	],
	hp: 170,
	types: [
		"Psychic",
	],


	suffix: "EX",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Cursed Drop",
			},
			effect: {
				en: "Put 4 damage counters on your opponent's Pokémon in any way you like.",
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Eerie Glow",
			},
			effect: {
				en: "The Defending Pokémon is now Burned and Confused.",
			},
			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],





}

export default card
