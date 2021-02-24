import { Card } from '../../../interfaces'
import Set from '../Dragon'

const card: Card = {
	name: {
		en: "Torkoal",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		324,
	],
	hp: 80,
	types: [
		"Fire",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Power Generation",
			},
			effect: {
				en: "Search your discard pile for up to 2 basic Energy cards, show them to your opponent, and put them into your hand.",
			},

		},
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Scorching Smoke",
			},
			effect: {
				en: "The Defending Pokémon is now Burned. Flip a coin. If tails, discard a Fire Energy card attached to Torkoal.",
			},

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],





}

export default card
