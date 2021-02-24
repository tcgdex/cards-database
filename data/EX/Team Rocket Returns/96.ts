import { Card } from '../../../interfaces'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		en: "Rocket's Articuno ex",
	},
	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		144,
	],
	hp: 100,
	types: [
		"Darkness",
	],


	suffix: "EX",
	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Darkness Veil",
			},
			effect: {
				en: "As long as Rocket's Articuno ex has any Darkness Energy attached to it prevent all effects except damage by an opponent's attack done to Rocket's Articuno ex.\"",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Freeze Solid",
			},
			effect: {
				en: "Search your discard pile for a Water Energy card and attach it to Rocket's Articuno ex.\"",
			},
			damage: 10,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Ice Wing",
			},

			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],





}

export default card
