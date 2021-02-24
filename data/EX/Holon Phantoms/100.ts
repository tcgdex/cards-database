import { Card } from '../../../interfaces'
import Set from '../Holon Phantoms'

const card: Card = {
	name: {
		en: "Mew ex",
	},
	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		151,
	],
	hp: 90,
	types: [
		"Psychic",
	],


	suffix: "EX",
	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Psychic Vision",
			},
			effect: {
				en: "Once during your turn (before your attack), if Mew ex is on your Bench, you may look at your opponent's hand.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Super Psy Bolt",
			},

			damage: 30,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Devo Crush",
			},
			effect: {
				en: "You may discard 2 Energy attached to Mew ex. If you do, you may remove the highest Stage Evolution card from the Defending Pokémon and shuffle that card into your opponent's deck.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],





}

export default card
