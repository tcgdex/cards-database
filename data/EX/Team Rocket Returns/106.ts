import { Card } from '../../../interfaces'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		en: "Rocket's Zapdos ex",
		de: "Rockets Zapdos ex"
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

	suffix: "EX",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Darkness Guard",
				de: "Darkness Guard"
			},
			effect: {
				en: "As long as Rocket's Zapdos ex has any Darkness Energy attached to it, damage done to Rocket's Zapdos ex by an opponent's attack is reduced by 10 (after applying Weakness and Resistance).\"",
				de: "As long as Rocket's Zapdos ex has any  Energy attached to it, damage done to Rocket's Zapdos ex by an opponent's attack is reduced by 10 (after applying Weakness and Resistance)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Plasma",
				de: "Plasma"
			},
			effect: {
				en: "Search your discard pile for a Lightning Energy card and attach it to Rocket's Zapdos ex.\"",
				de: "Search your discard pile for a  Energy card and attach it to Rocket's Zapdos ex."
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
				en: "Raging Thunder",
				de: "Raging Thunder"
			},
			effect: {
				en: "This attack does 30 damage to 1 of your Pokémon.",
				de: "This attack does 30 damage to 1 of your Pokémon."
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

	thirdParty: {
		cardmarket: 276398,
		tcgplayer: 88801
	},

	variants: [
		{
			type: "holo"
		},
	]
}

export default card
