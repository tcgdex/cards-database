import { Card } from 'models/database/card'
import Set from '../Base Set'

const card: Card = {
	name: {
		'en-us': "Magikarp",
		'fr-fr': "Magicarpe",
		'de-de': "Karpador",
		'it-it': "Magikarp"
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
				'en-us': "Tackle",
				'fr-fr': "Charge",
				'de-de': "Tackle",
				'it-it': "Azione"
			},

			damage: 10,

		},
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Flail",
				'fr-fr': "Nageoire",
				'de-de': "Dreschflegel",
				'it-it': "Convulsione"
			},
			effect: {
				'en-us': "Does 10 damage times number of damage counters on Magikarp.",
				'fr-fr': "Inflige 10 dégâts multipliés par le nombre de marqueurs de dégâts sur Magicarpe.",
				'de-de': "Fügt 10 Schadenspunkte mal der Anzahl der auf Karpador abgelegten Schadensmarken zu.",
				'it-it': "Infligge 10 danni moltiplicati per il numero di segnalini danno su Magikarp."
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
	retreat: 1,


	description: {
		'en-us': "In the distant past, it was stronger than its horribly weak descendants that exist today.",
		'fr-fr': "Autrefois, il était beaucoup plus puissant que cette créature minablement faible.",
		'it-it': "In un passato remoto era molto più forte dei suoi debolissimi discendenti."
	},

	variants: [
		{
			type: "normal",
			subtype: "unlimited",
			thirdParty: {
				cardmarket: 273730,
				tcgplayer: 42377
			},
		},
		{
			type: "normal",
			subtype: "shadowless",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 107032
			},
		},
		{
			type: "normal",
			subtype: "shadowless",
			thirdParty: {
				tcgplayer: 107032
			},
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright",
		}
	],
}

export default card
