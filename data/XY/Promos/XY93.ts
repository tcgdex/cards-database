import { Card } from '../../../interfaces'
import Set from '../Promos'

const card: Card = {
	name: {
		en: "Celebi",
		fr: "Celebi",
	},
	illustrator: "Shin Nagasawa",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		251,
	],
	hp: 70,
	types: [
		"Grass",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Leap Through Time",
			},
			effect: {
				en: "When this Pokémon is Knocked Out, flip a coin. If heads, your opponent can't take a Prize card. Shuffle this Pokémon and all cards attached to it into your deck.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Sparkle Mine",
				fr: "Stop Θ",
			},
			effect: {
				en: "Put 1 damage counter on each of your opponent's Pokémon.",
			},

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
