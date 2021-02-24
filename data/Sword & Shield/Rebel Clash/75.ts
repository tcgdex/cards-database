import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Clefable",
	},
	illustrator: "miki kudo",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,



	evolveFrom: {
		en: "Clefairy",
	},


	abilities: [
		{
			type: "Ability",
			name: {
				en: "Prankish",
			},
			effect: {
				en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may put an Energy attached to your opponent’s Active Pokémon on top of their deck.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Moon Kick",
			},

			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
