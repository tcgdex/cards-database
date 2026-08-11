import { Card } from 'models/database/card'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		'en-us': "Rocket's Zapdos ex",
		'de-de': "Rockets Zapdos ex"
	},

	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		145,
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
				'en-us': "Darkness Guard",
				'de-de': "Darkness Guard"
			},
			effect: {
				'en-us': "As long as Rocket's Zapdos ex has any Darkness Energy attached to it, damage done to Rocket's Zapdos ex by an opponent's attack is reduced by 10 (after applying Weakness and Resistance).\"",
				'de-de': "As long as Rocket's Zapdos ex has any  Energy attached to it, damage done to Rocket's Zapdos ex by an opponent's attack is reduced by 10 (after applying Weakness and Resistance)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Plasma",
				'de-de': "Plasma"
			},
			effect: {
				'en-us': "Search your discard pile for a Lightning Energy card and attach it to Rocket's Zapdos ex.\"",
				'de-de': "Search your discard pile for a  Energy card and attach it to Rocket's Zapdos ex."
			},
			damage: 10,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Raging Thunder",
				'de-de': "Raging Thunder"
			},
			effect: {
				'en-us': "This attack does 30 damage to 1 of your Pokémon.",
				'de-de': "This attack does 30 damage to 1 of your Pokémon."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	
	retreat: 1,


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 276398,
				tcgplayer: 88801
			},
		},
	],

}

export default card
