import { Card } from '../../../interfaces'
import Set from '../Pokémon Rumble'

const card: Card = {
	name: {
		en: "Zapdos",
	},
	illustrator: undefined,
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		145,
	],
	hp: 100,
	types: [
		"Lightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Drill Peck",
			},

			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-20"
		},
	],




}

export default card
