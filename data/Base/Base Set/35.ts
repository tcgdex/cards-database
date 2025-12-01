import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Magikarp",
		fr: "Magicarpe",
		de: "Karpador"
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
				fr: "Charge",
				de: "Tackle"
			},

			damage: 10,

		},
		{
			cost: [
				"Water",
			],
			name: {
				en: "Flail",
				fr: "Nageoire",
				de: "Dreschflegel"
			},
			effect: {
				en: "Does 10 damage times number of damage counters on Magikarp.",
				fr: "Inflige 10 dégâts multipliés par le nombre de marqueurs de dégâts sur Magicarpe.",
				de: "Fügt 10 Schadenspunkte mal der Anzahl der auf Karpador abgelegten Schadensmarken zu."
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

	description: {
		fr: "Autrefois, il était beaucoup plus puissant que cette créature minablement faible."
	},

	thirdParty: {
		cardmarket: 273730,
		tcgplayer: 42377
	},
	variants: [
		{
			type: "normal",
			subtype: "unlimited",
		},
		{
			type: "normal",
			subtype: "shadowless",
			stamp: ["1st-edition"]
		},
		{
			type: "normal",
			subtype: "shadowless",
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright",
		}
	],

	related: [
		{
			type: "translation",
			cardPath: "data-asia/PMCG/PMCG1/031.ts"
		}
	]
}

export default card
