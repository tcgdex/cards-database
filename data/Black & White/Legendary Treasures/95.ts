import { Card } from '../../../interfaces'
import Set from '../Legendary Treasures'

const card: Card = {
	name: {
		en: "Gabite",
	},
	illustrator: "Shigenori Negishi",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		444,
	],
	hp: 80,
	types: [
		"Dragon",
	],
	evolveFrom: {
		en: "Gible",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Tackle",
			},

			damage: 20,

		},
		{
			cost: [
				"Water",
				"Fightning",
			],
			name: {
				en: "Shred",
			},
			effect: {
				en: "This attack's damage isn't affected by any effects on the Defending Pokémon.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Dragon",
			value: "×2"
		},
	],





}

export default card
