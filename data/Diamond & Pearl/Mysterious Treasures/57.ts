import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Octillery",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		224,
	],
	hp: 80,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Remoraid",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Crash Bomber",
			},
			effect: {
				en: "If the Defending Pokémon has any Special Energy cards attached to it, this attack does 30 damage plus 30 more damage. Then, discard a Special Energy card attached to the Defending Pokémon.",
			},
			damage: 30,

		},
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				en: "Aqua Liner",
			},
			effect: {
				en: "Choose 1 of your opponent's Benched Pokémon. This attack does 40 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			},

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		},
	],





}

export default card
