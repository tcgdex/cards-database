import { Card } from 'models/database/card'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		'en-us': "Rocket's Moltres ex",
		'de-de': "Rockets Lavados ex"
	},

	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		146,
	],

	hp: 100,

	types: [
		"Darkness",
	],

	suffix: "ex",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Dark Lift",
				'de-de': "Dark Lift"
			},
			effect: {
				'en-us': "If Rocket's Moltres ex has any Darkness Energy attached to it, the Retreat Cost for Rocket's Moltres ex is 0.\"",
				'de-de': "If Rocket's Moltres ex has any  Energy attache to it, the Retread Cost for Rocket's Moltres ex is 0."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Fire Dance",
				'de-de': "Fire Dance"
			},
			effect: {
				'en-us': "Search your discard pile for a Fire Energy card and attach it to 1 of your Pokémon.\"",
				'de-de': "Search your discard pile for a  Energy card and attached it to 1 of your Pokémon."
			},
			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Combustion",
				'de-de': "Combustion"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	
	retreat: 2,


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 276392,
				tcgplayer: 88782
			},
		},
	],

}

export default card
