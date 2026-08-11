import { Card } from 'models/database/card'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		'en-us': "Rocket's Articuno ex",
		'de-de': "Rockets Arktos ex"
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

	suffix: "ex",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Darkness Veil",
				'de-de': "Darkness Veil"
			},
			effect: {
				'en-us': "As long as Rocket's Articuno ex has any Darkness Energy attached to it prevent all effects except damage by an opponent's attack done to Rocket's Articuno ex.\"",
				'de-de': "As long as Rocket's Articuno ex has any  Energy attached to it, prevent all effects, except damage, by an opponent's attack done to Rocket's Articuno ex."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Freeze Solid",
				'de-de': "Freeze Solid"
			},
			effect: {
				'en-us': "Search your discard pile for a Water Energy card and attach it to Rocket's Articuno ex.\"",
				'de-de': "Search your discard pile for a  Energy card and attach it to Rocket's Articuno ex."
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
				'en-us': "Ice Wing",
				'de-de': "Ice Wing"
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

	
	retreat: 1,


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 276388,
				tcgplayer: 88768
			},
		},
	],

}

export default card
