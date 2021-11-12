import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Magikarp",
		fr: "Magicarpe"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		129,
	],

	hp: 30,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Tackle",
				fr: "Charge"
			},

			damage: 10,

		},
		{
			cost: [
				"Water",
			],
			name: {
				en: "Flail",
				fr: "Nageoire"
			},
			effect: {
				en: "Does 10 damage times number of damage counters on Magikarp.",
				fr: "Inflige 10 dégâts multipliés par le nombre de marqueurs de dégâts sur Magicarpe."
			},
			damage: "10×",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	description: {
		fr: "Autrefois, il était beaucoup plus puissant que cette créature minablement faible."
	}
}

export default card
