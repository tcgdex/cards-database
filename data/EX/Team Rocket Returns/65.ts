import { Card } from '../../../interfaces'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		en: "Magikarp",
		de: "Karpador"
	},

	illustrator: "Yukiko Baba",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		129,
	],

	hp: 30,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Call for Friends",
				de: "Call for Friends"
			},
			effect: {
				en: "Search your deck for up to 2 Basic Pokémon and put them onto your Bench. Shuffle your deck afterward.",
				de: "Search your deck for up to 2 Basic Pokémon and put them onto your Bench. Shuffle your deck afterward."
			},

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
		cardmarket: 276357,
		tcgplayer: 87027
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

