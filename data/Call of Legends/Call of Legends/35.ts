import { Card } from '../../../interfaces'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		en: "Typhlosion",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		157,
	],
	hp: 130,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Quilava",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Magma Punch",
			},

			damage: 50,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Fire Spin",
			},
			effect: {
				en: "Discard 2 Energy attached to Typhlosion.",
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





}

export default card
