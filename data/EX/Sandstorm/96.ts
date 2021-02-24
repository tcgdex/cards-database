import { Card } from '../../../interfaces'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		en: "Gardevoir ex",
	},
	illustrator: "Hikaru Koike",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		282,
	],
	hp: 150,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Kirlia",
	},

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Feedback",
			},
			effect: {
				en: "Count the number of cards in your opponent's hand. Put that many damage counters on the Defending Pokémon.",
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Psystorm",
			},
			effect: {
				en: "Does 10 damage times the total amount of Energy attached to all Pokemon in play.",
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
		{
			type: "Psychic",
			value: "×2"
		},
	],





}

export default card
