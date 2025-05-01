import { Card } from '../../../interfaces'
import Set from '../DP trainer Kit (Manaphy)'

const card: Card = {
	dexId: [119],
	set: Set,

	name: {
		en: "Seaking"
	},

	illustrator: "Atsuko Nishida",
	rarity: "None",
	category: "Pokemon",
	stage: "Stage1",

	hp: 80,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Goldeen",
	},

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless"
			],
			name: {
				en: "Flail"
			},
			effect: {
				en: "Does 10 damage times the number of damage counters on Seaking."
			},
			damage: "10x"
		},
		{
			cost: [
				"Water",
				"Water"
			],
			name: {
				en: "Horn Drill"
			},
			damage: 50
		}
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "20+"
		}
	],

	description: {
		en: "It makes its nest by hollowing out boulders in streams with its horn. It defends its eggs with its life."
	},

	retreat: 1
}

export default card
