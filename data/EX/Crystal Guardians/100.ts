import { Card } from '../../../interfaces'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		en: "Celebi Star",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		251,
	],
	hp: 60,
	types: [
		"Grass",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Time Travel",
			},
			effect: {
				en: "If Celebi Star would be Knocked Out by damage from an opponent's attack, you may flip a coin. If heads, Celebi Star is not Knocked Out, discard all cards attached to Celebi Star, and put Celebi Star on the bottom of your deck.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Leaf Shade",
			},
			effect: {
				en: "Count the amount of Energy attached to Celebi Star. Put that many damage counters on 1 of your opponent's Pokémon.",
			},

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],





}

export default card
