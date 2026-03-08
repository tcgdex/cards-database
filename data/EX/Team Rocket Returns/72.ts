import { Card } from '../../../interfaces'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		en: "Rattata",
		de: "Rattfratz"
	},

	illustrator: "Naoyo Kimura",
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

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Call for Family",
				de: "Call for Family"
			},
			effect: {
				en: "Search your deck for a Basic Pokémon and put it onto your Bench. Shuffle your deck afterward.",
				de: "Search your deck for a Basic Pokémon and put it onto your Bench. Shuffle your deck afterward."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Snarl",
				de: "Snarl"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 damage to the Defending Pokémon. If tails, the Defending Pokémon is now Paralyzed.",
				de: "Flip a coin. If heads, this attack does 10 damage to the Defending Pokémon. If tails, the Defending Pokémon is now Paralyzed."
			},

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
		tcgplayer: 88617
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

