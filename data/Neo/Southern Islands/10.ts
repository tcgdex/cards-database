import { Card } from '../../../interfaces'
import Set from '../Southern Islands'

const card: Card = {
	name: {
		en: "Tentacruel",
	},

	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		73,
	],

	hp: 60,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Tentacool",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Tentacle Grip",
			},
			effect: {
				en: "Flip a number of coins equal to the number of Water Energy cards attached to Tentacruel. For each heads, draw 2 cards.",
			},

		},
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				en: "Poison Sting",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
			},
			damage: 20,

		},
		{
			cost: [
				"Water",
			],
			name: {
				en: "Tentacle Grip",
			},
			effect: {
				en: "Flip a number of coins equal to the number of Water Energy cards attached to Tentacruel. For each heads, draw 2 cards.",
			},

		},
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				en: "Poison Sting",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Poisoned.",
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 275640
	}
}

export default card
