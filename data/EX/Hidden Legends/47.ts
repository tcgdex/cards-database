import { Card } from '../../../interfaces'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		en: "Sealeo",
	},
	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		364,
	],
	hp: 70,
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
			],
			name: {
				en: "Super Icy Wind",
			},
			effect: {
				en: "Does 10 damage to each of your opponent's Pokémon. This attack's damage isn't affected by Weakness or Resistance.",
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Skull Bash",
			},

			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],





}

export default card
