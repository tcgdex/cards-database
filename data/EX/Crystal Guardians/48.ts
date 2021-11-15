import { Card } from '../../../interfaces'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		en: "Charmander",
		fr: "Salamèche"
	},
	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		4,
	],
	hp: 50,
	types: [
		"Fire",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Retaliate",
				fr: "Représailles"
			},
			effect: {
				en: "Does 10 damage times the number of damage counters on Charmander.",
				fr: "Inflige 10 dégâts multipliés par le nombre de marqueurs de dégât sur Salamèche."
			},
			damage: "10×",

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Flame Tail",
				fr: "Queue de flammes"
			},

			damage: 20,

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
