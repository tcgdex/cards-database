import { Card } from '../../../interfaces'
import Set from '../Base Set 2'

const card: Card = {
	name: {
		en: "Starmie",
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		121,
	],

	hp: 60,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Staryu",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				en: "Recover",
			},
			effect: {
				en: "Discard 1 Energy card to Starmie in order to use this attack. Remove all damage counters from Starmie.",
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Star Freeze",
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
		cardmarket: 274017
	}
}

export default card
