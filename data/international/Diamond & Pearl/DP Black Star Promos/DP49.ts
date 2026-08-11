import { Card } from 'models/database/card'
import Set from '../DP Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Dialga",
		'de-de': "Dialga"
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		483,
	],
	hp: 100,
	types: [
		"Metal",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				'en-us': "Time Call",
				'de-de': "Time Call"
			},
			effect: {
				'en-us': "Search your deck for a card that evolves from 1 of your Pokémon and put it on that Pokémon. (This counts as evolving that Pokémon.) Shuffle your deck afterward.",
				'de-de': "Search your deck for a card that evolves from 1 of your Pokémon and put it onto that Pokémon. (This counts as evolving that Pokémon.) Shuffle your deck afterward."
			},

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Time Wager",
				'de-de': "Time Wager"
			},
			effect: {
				'en-us': "Flip 2 coins. If either of them is tails, this attack's base damage is 50 instead of 100.",
				'de-de': "Flip 2 coins. If either of them is tails, this attack's base damage is 50 instead of 100."
			},
			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 2,


	description: {
		'en-us': "It has the power to control time. It appears in Sinnoh-region myths as an ancient deity.",
	},

	variants: [
		{
			type: "holo",
		}
	],
}

export default card
