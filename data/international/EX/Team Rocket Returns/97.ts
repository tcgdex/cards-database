import { Card } from 'models/database/card'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		'en-us': "Rocket's Entei ex",
		'de-de': "Rockets Entei ex"
	},

	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		244,
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
				'en-us': "Dark Condition",
				'de-de': "Dark Condition"
			},
			effect: {
				'en-us': "As long as Rocket's Entei ex has any Darkness Energy attached to it, Rocket's Entei ex has no Weakness.\"",
				'de-de': "As long as Rocket's Entei ex has any  Energy attached to it, Reocket's Entei ex has no Weakness."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Energy Link",
				'de-de': "Energy Link"
			},
			effect: {
				'en-us': "Search your discard pile for an Energy card and attach it to Rocket's Entei ex.",
				'de-de': "Search your discard pile for an Energy card and attach it to Rocket's Entei ex."
			},
			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Volcanic Ash",
				'de-de': "Volcanic Ash"
			},
			effect: {
				'en-us': "Discard 2 Energy attached to Rocket's Entei ex and then choose 1 of your opponent's Pok��mon. This attack does 60 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'de-de': "Discard 2 Energy attached to Rocket's Entei ex and then choose 1 of your opponent's Pokémon. This attack does 60 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	
	retreat: 1,


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 276389,
				tcgplayer: 88769
			},
		},
	],

}

export default card
