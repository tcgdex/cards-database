import { Card } from '../../../interfaces'
import Set from '../POP Series 4'

const card: Card = {
	name: {
		en: "Grovyle",
		fr: "Massko",
		de: "Reptain"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [253],

	hp: 70,

	types: [
		"Grass"
	],

	evolveFrom: {
		en: "Treecko",
		fr: "Arcko",
		de: "Geckarbor"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Quick Attack",
				fr: "Vive-attaque",
				de: "Ruckzuckhieb"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 damage plus 10 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts plus 10 dégâts supplémentaires.",
				de: "Wirf 1 Münze. Bei „Kopf“ fügt dieser Angriff 10 Schadenspunkte plus 10 weitere Schadenspunkte zu."
			},
			damage: "10+",

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Blot",
				fr: "Pâté",
				de: "Klecks"
			},
			effect: {
				en: "Remove 2 damage counters from Grovyle.",
				fr: "Retirez à Massko 2 marqueurs de dégât.",
				de: "Entferne 2 Schadensmarken von Reptain."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Water",
			value: "-30"
		},
	],
	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85940,
				cardmarket: 277472
			},
		},
	],

}

export default card
