import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Quilava",
	},
	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		156,
	],
	hp: 80,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Cyndaquil",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Fireworks",
			},
			effect: {
				en: "Flip a coin. If tails, discard a Fire Energy attached to Quilava.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "+20"
		},
	],





}

export default card
