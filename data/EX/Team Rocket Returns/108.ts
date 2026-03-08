import { Card } from '../../../interfaces'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		en: "Torchic Star",
		de: "Flemmli *"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		255,
	],

	hp: 70,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Fireworks",
				de: "Firworks"
			},
			effect: {
				en: "Flip a coin. If tails, discard a Fire Energy card attached to Torchic Star.",
				de: "Flip a coin. If tails, discard a  Energy card attached to Shinning Torchic."
			},
			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				en: "Spring Back",
				de: "Spring Back"
			},
			effect: {
				en: "If your opponent has only 1 Prize card left, this attack does 20 damage plus 50 more damage and the Defending Pokémon is now Confused.",
				de: "If your opponent has only 1 Prize card left, this atack does 20 damage plus 50 more damage and the Defending Pokémon is now Confused."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		tcgplayer: 89965
	},

	variants: [
		{
			type: "holo"
		},
	]
}

export default card
