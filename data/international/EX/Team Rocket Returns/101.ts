import { Card } from 'models/database/card'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		'en-us': "Rocket's Scizor ex",
		'de-de': "Rockets Scherox ex"
	},

	illustrator: "Hikaru Koike",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		212,
	],

	hp: 120,

	types: [
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Rocket's Scyther ex",
	},

	suffix: "ex",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Dual Armor",
				'de-de': "Dual Armor"
			},
			effect: {
				'en-us': "As long as Rocket's Scizor ex has any Metal Energy attached to it, Rocket's Scizor ex is both Darkness and Metal type.\"",
				'de-de': "As long as Rocket's Scizor ex has any  Energy attached to it, Rocket's Scizor ex is both  and  type."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Rotating Claws",
				'de-de': "Rotating Claws"
			},
			effect: {
				'en-us': "You may discard an Energy card attached to Rocket's Scizor ex. If you do, search your discard pile for an Energy card (excluding the one you discarded) and attach it to Rocket's Scizor ex.",
				'de-de': "You may discard an Energy card attached to Rocket's Scizor ex. If you do, search your discard pile for an Energy card (excluding the one you discarded) and attach it to Rocket's Scizor ex."
			},
			damage: 50,

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
			type: "Grass",
			value: "-30"
		},
	],

	
	retreat: 1,


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 276393,
				tcgplayer: 88787
			},
		},
	],

}

export default card
