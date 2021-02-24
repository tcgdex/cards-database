import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Rillaboom V",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,







	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Forest Feast",
			},
			effect: {
				en: "Search your deck for up to 2 Basic Grass Pokémon and put them onto your Bench. Then, shuffle your deck.",
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Wood Hammer",
			},
			effect: {
				en: "This Pokémon also does 30 damage to itself.",
			},
			damage: 220,

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
