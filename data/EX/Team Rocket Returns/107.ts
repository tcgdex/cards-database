import { Card } from '../../../interfaces'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		en: "Mudkip Star",
		de: "Hydropi *"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		258,
	],

	hp: 70,

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
				en: "Whirlpool",
				de: "Whirlpool"
			},
			effect: {
				en: "Flip a coin. If heads, discard an Energy card attached to the Defending Pokémon.",
				de: "Flip a coin. If heads, discard an Energy attached to the Defending Pokémon."
			},

		},
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				en: "Spring Back",
				de: "Spring Back"
			},
			effect: {
				en: "If your opponent has only 1 Prize card left, this attack does 20 damage plus 50 more damage and the Defending Pokémon is now Asleep.",
				de: "If your opponents has only 1 Prize card left, this attack does 20 damage plus 50 more damage and the Defending Pokémon is now Asleep."
			},
			damage: "20+",

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
		tcgplayer: 87616
	},

	variants: [
		{
			type: "holo"
		},
	]
}

export default card
