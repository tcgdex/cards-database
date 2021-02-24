import { Card } from '../../../interfaces'
import Set from '../Legendary Treasures'

const card: Card = {
	name: {
		en: "Meloetta-EX",
	},
	illustrator: "Eske Yoshinob",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		648,
	],
	hp: 110,
	types: [
		"Psychic",
	],


	suffix: "EX",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Brilliant Voice",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Asleep. If tails, the Defending Pokémon is now Confused.",
			},
			damage: 20,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Round",
			},
			effect: {
				en: "Does 30 damage times the number of your Pokémon that have the Round attack.",
			},
			damage: 30,

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
