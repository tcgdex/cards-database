import { Card } from '../../../interfaces'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		en: "Seaking",
		fr: "Poissoroy",
	},
	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		119,
	],
	hp: 80,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Goldeen",
		fr: "Poissirène",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Flail",
				fr: "Fléau",
			},
			effect: {
				en: "Does 10 damage times the number of damage counters on Seaking.",
				fr: "Inflige 10 dégâts multipliés par le nombre de marqueurs de dégât sur Poissoroy.",
			},
			damage: 10,

		},
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				en: "Horn Drill",
				fr: "Empal'korne",
			},

			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		},
	],

	retreat: 1,



}

export default card
