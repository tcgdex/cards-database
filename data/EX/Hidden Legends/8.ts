import { Card } from '../../../interfaces'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		en: "Jirachi",
	},
	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		385,
	],
	hp: 70,
	types: [
		"Psychic",
		"Metal",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Make a Wish",
			},
			effect: {
				en: "Search your deck for a card that evolves from 1 of your Pokémon and put it on that Pokémon. (This counts as evolving that Pokémon.) If you do, put 1 damage counter on Jirachi. Shuffle your deck afterward.",
			},

		},
		{
			cost: [
				"Psychic",
				"Metal",
			],
			name: {
				en: "Mind Bend",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Confused.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],





}

export default card
