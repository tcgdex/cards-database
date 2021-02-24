import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Rillaboom VMAX",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 330,

	evolveFrom: {
		en: "Rillaboom V",
	},



	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Scratch",
			},
			effect: {
				en: undefined,
			},
			damage: 50,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Max Beating",
			},
			effect: {
				en: "You may discard up to 3 Grass Energy from this Pokémon. If you do, this attack does 50 more damage for each card you discarded in this way.",
			},
			damage: "130+",

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
