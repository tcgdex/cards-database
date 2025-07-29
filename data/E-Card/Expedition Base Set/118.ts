import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Magikarp",
		fr: "Magicarpe",
		de: "Karpador"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Common",
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
				en: "Flail",
				fr: "Fléau",
				de: "Flail"
			},
			effect: {
				en: "This attack does 10 damage times the number of damage counters on Magikarp.",
				fr: "Inflige 10 dégâts multipliés par le nombre de marqueurs de dégâts sur Magicarpe.",
				de: "This attack does 10 damage times the number of damage counters on Magikarp."
			},
			damage: "10x",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 274993
	}
}

export default card
