import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Sudowoodo",
		fr: "Simularbre"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		185,
	],

	hp: 60,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Flail",
				fr: "Fleau"
			},
			effect: {
				en: "Does 10 damage times the number of damage counters on Sudowoodo.",
				fr: "Inflige 10 dégâts multipliés par le nombre de marqueurs de dégâts sur Simularbre."
			},
			damage: "10×",

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Rock Throw",
				fr: "Jet-pierres"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	description: {
		fr: "Bien qu'il prétende être un arbre, il ressemble plus à un rock qu'à une plante."
	}
}

export default card
