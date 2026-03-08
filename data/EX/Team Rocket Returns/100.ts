import { Card } from '../../../interfaces'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		en: "Rocket's Moltres ex",
		de: "Rockets Lavados ex"
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

	suffix: "EX",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Dark Lift",
				de: "Dark Lift"
			},
			effect: {
				en: "If Rocket's Moltres ex has any Darkness Energy attached to it, the Retreat Cost for Rocket's Moltres ex is 0.\"",
				de: "If Rocket's Moltres ex has any  Energy attache to it, the Retread Cost for Rocket's Moltres ex is 0."
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
				en: "Fire Dance",
				de: "Fire Dance"
			},
			effect: {
				en: "Search your discard pile for a Fire Energy card and attach it to 1 of your Pokémon.\"",
				de: "Search your discard pile for a  Energy card and attached it to 1 of your Pokémon."
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
				en: "Combustion",
				de: "Combustion"
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

	thirdParty: {
		cardmarket: 276392,
		tcgplayer: 88782
	},

	variants: [
		{
			type: "holo"
		},
	]
}

export default card
