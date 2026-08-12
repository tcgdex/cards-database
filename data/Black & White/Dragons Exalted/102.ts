import { Card } from '../../../interfaces'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		en: "Vigoroth",
		fr: "Vigoroth",
		es: "Vigoroth",
		it: "Vigoroth",
		pt: "Vigoroth",
		de: "Muntier"
	},

	illustrator: "match",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		288,
	],

	hp: 80,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Slakoth",
		fr: "Parecool",
		de: "Bummelz"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Ambush",
				fr: "Embuscade",
				de: "Hinterhalt"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 40 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 40 dégâts supplémentaires.",
				de: "Wirf 1 Münze. Bei „Kopf“ fügt dieser Angriff 40 weitere Schadenspunkte zu."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "Its heart beats at a tenfold tempo, so it cannot sit still for even a moment.",
		de: "Sein Herz schlägt schneller als das anderer Lebewesen. Daher kann es nicht für einen Moment still sitzen."
	},

	thirdParty: {
		cardmarket: 280541,
		tcgplayer: 90372
	}
}

export default card
