import { Card } from '../../../interfaces'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		en: "Tyranitar ex",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		248,
	],
	hp: 160,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Pupitar",
	},

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Shatter",
			},
			effect: {
				en: "Discard any Stadium card in play.",
			},
			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Derail",
			},
			effect: {
				en: "Discard a Special Energy card, if any, attached to the Defending Pokémon.",
			},
			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Mix-Up",
			},
			effect: {
				en: "Your opponent discards the top card of his or her deck.",
			},
			damage: 70,

		},
		{
			cost: [
				"Fighting",
				"Darkness",
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Losing Control",
			},
			effect: {
				en: "Discard the top 3 cards of your deck.",
			},
			damage: 120,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
		{
			type: "Fighting",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],




}

export default card
