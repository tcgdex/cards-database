import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Appletun",
	},
	illustrator: "Akira Komayama",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,



	evolveFrom: {
		en: "Applin",
	},


	abilities: [
		{
			type: "Ability",
			name: {
				en: "Delicious Aroma",
			},
			effect: {
				en: "Once during your turn, you may flip a coin. If heads, switch 1 of your opponent’s Benched Basic Pokémon with their Active Pokémon.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Solar Beam",
			},

			damage: 70,

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
