import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Coalossal",
	},
	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,



	evolveFrom: {
		en: "Carkol",
	},


	abilities: [
		{
			type: "Ability",
			name: {
				en: "Tar Generator",
			},
			effect: {
				en: "Once during your turn, you may attach a Fire Energy card, a Fighting Energy card, or 1 of each from your discard pile to your Pokémon in any way you like.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fightning",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Flaming Avalanche",
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

	retreat: 4,



}

export default card
