import { Card } from '../../../interfaces'
import Set from '../Undaunted'

const card: Card = {
	name: {
		en: "Hariyama",
		fr: "Hariyama",
	},
	illustrator: "Tomokazu Komiya",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		297,
	],
	hp: 100,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Makuhita",
		fr: "Makuhita",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hammer In",
				fr: "Enfoncer",
			},

			damage: 60,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Backward Belt Throw",
				fr: "Projection arrière",
			},
			effect: {
				en: "You may do 80 damage plus 20 more damage. If you do, Hariyama does 20 damage to itself.",
				fr: "Vous pouvez infliger 80 dégâts plus 20 dégâts supplémentaires. Dans ce cas, Hariyama s'inflige 20 dégâts.",
			},
			damage: "80+",

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
