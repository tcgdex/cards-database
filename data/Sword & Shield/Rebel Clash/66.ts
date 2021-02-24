import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Vikavolt",
	},
	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,



	evolveFrom: {
		en: "Charjabug",
	},



	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Powerful Storm",
			},
			effect: {
				en: "This attack does 20 more damage for each Energy attached to all of your Pokémon.",
			},
			damage: "60+",

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Thunder Jolt Beam",
			},
			effect: {
				en: "This Pokémon also does 30 damage to itself.",
			},
			damage: 170,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
