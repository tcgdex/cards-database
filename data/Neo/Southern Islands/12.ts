import { Card } from '../../../interfaces'
import Set from '../Southern Islands'

const card: Card = {
	name: {
		en: "Lapras",
	},

	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		131,
	],

	hp: 70,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Gentle Song",
			},
			effect: {
				en: "If Lapras has any damage counters on it, remove 2 of them from it (1 if it only has 1). If the Defending Pokémon has any damage counters on it, remove 2 of them from it (1 if it only has 1). The Defending Pokémon is now Asleep.",
			},

		},
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				en: "Ice Beam",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
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
		cardmarket: 275642,
		tcgplayer: 46469
	},

	variants: [
		{
			type: "normal",
		}
	]
}

export default card
