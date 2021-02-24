import { Card } from '../../../interfaces'
import Set from '../Legendary Collection'

const card: Card = {
	name: {
		en: "Arcanine",
	},
	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		59,
	],
	hp: 100,
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
				"Fire",
				"Colorless",
			],
			name: {
				en: "Flamethrower",
			},
			effect: {
				en: "Discard 1 Energy card attached to Arcanine in order to use this attack.",
			},
			damage: 50,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Take Down",
			},
			effect: {
				en: "Arcanine does 30 damage to itself.",
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],





}

export default card
