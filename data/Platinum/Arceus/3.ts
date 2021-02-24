import { Card } from '../../../interfaces'
import Set from '../Arceus'

const card: Card = {
	name: {
		en: "Heatran",
	},
	illustrator: "Keiko Moritsugu",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		485,
	],

	types: [
		"Fire",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Fire Fang",
			},
			effect: {
				en: "The Defending Pokémon is now Burned.",
			},
			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Magma Mantle",
			},
			effect: {
				en: "Discard the top 3 cards of your deck. This attack does 60 damage plus 20 more damage for each Fire or Metal Energy card you discarded.",
			},
			damage: "60+",

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
