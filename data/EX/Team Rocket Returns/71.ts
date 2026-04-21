import { Card } from '../../../interfaces'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		en: "Rattata",
		de: "Rattfratz"
	},

	illustrator: "Aya Kusube",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		19,
	],

	hp: 40,

	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Scramble",
				de: "Scramble"
			},
			effect: {
				en: "As long as your opponent has any Pokémon-ex as his or her Active Pokémon, the Retreat Cost for Rattata is 0.",
				de: "As long as your opponent has any Pokémon-ex as his or her Active Pokémon, the Retreat Cost for Rattata is 0."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Fury Swipes",
				de: "Fury Swipes"
			},
			effect: {
				en: "Flip 3 coins. This attack does 10 damage times the number of heads.",
				de: "Flip 3 coins. This attack does 10 damage times the number of heads."
			},
			damage: "10x",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 276363,
		tcgplayer: 88616
	},

	variants: [
		{
			type: "holo",
			stamp: ["set-logo"]
		},
		{
			type: "normal",
		}
	]
}

export default card

