import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Magikarp",
		fr: "Magicarpe",
		de: "Karpador",
		it: "Magikarp"
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
				de: "Tackle",
				it: "Azione"
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
				de: "Dreschflegel",
				it: "Convulsione"
			},
			effect: {
				en: "Does 10 damage times number of damage counters on Magikarp.",
				fr: "Inflige 10 dégâts multipliés par le nombre de marqueurs de dégâts sur Magicarpe.",
				de: "Fügt 10 Schadenspunkte mal der Anzahl der auf Karpador abgelegten Schadensmarken zu.",
				it: "Infligge 10 danni moltiplicati per il numero di segnalini danno su Magikarp."
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
		fr: "Autrefois, il était beaucoup plus puissant que cette créature minablement faible.",
		it: "In un passato remoto era molto più forte dei suoi debolissimi discendenti."
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
}

export default card
