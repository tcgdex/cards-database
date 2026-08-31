import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Feraligatr",
		fr: "Aligatueur",
		de: "Impergator"
	},

	illustrator: "Hiromichi Sugiyama",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [160],

	hp: 100,

	types: [
		"Water"
	],

	evolveFrom: {
		en: "Croconaw",
		fr: "Crocrodil",
		de: "Tyracroc"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Slash",
				fr: "Tranche",
				de: "Schlitzer"
			},

			damage: 20,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Double Claw",
				fr: "Combo-griffe",
				de: "Doppelkralle"
			},
			effect: {
				en: "Flip 2 coins. This attack does 30 damage plus 20 more damage for each heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 30 dégâts plus 20 dégâts supplémentaires pour chaque face.",
				de: "Wirf zwei Münzen. Dieser Angriff fügt 30 Schadenspunkte plus 20 weitere Schadenspunkte pro geworfenem „Kopf“ zu."
			},
			damage: "30+",

		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "x2"
		},
	],
	retreat: 2,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85415,
				cardmarket: 274887
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 85415,
				cardmarket: 274887
			},
		},
	],
}

export default card
