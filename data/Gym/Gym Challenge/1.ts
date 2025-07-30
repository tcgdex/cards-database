import { Card } from '../../../interfaces'
import Set from '../Gym Challenge'

const card: Card = {
	name: {
		en: "Blaine's Arcanine",
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		59,
	],

	hp: 90,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Growlithe",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Heat Tackle",
			},
			effect: {
				en: "Blaine's Arcanine does 10 damage to itself.",
			},
			damage: 40,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
				"Fire",
			],
			name: {
				en: "Firestorm",
			},
			effect: {
				en: "Discard 3 Energy cards attached to Blaine's Arcanine in order to use this attack.",
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 274269,
		tcgplayer: 83860
	}
}

export default card
