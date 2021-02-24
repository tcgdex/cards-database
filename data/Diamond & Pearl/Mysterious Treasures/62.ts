import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Sealeo",
	},
	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		364,
	],
	hp: 80,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Spheal",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				en: "Ice Rider",
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon. This attack does 30 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			},

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "+20"
		},
	],





}

export default card
