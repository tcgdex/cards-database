import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Vigoroth",
		fr: "Vigoroth",
		de: "Muntier"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [288],

	hp: 80,

	types: [
		"Colorless"
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
			],
			name: {
				en: "Reckless Charge",
				fr: "Attaque imprudente",
				de: "Waghalsiger Sturmangriff"
			},
			effect: {
				en: "Flip a coin. If tails, Vigoroth does 10 damage to itself.",
				fr: "Lancez une pièce. Si c'est pile, Vigoroth s'inflige 10 dégâts.",
				de: "Wirf 1 Münze. Bei „Zahl“ fügt Muntier sich selbst 10 Schadenspunkte zu."
			},
			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Fight Back",
				fr: "Rendre les coups",
				de: "Zur Wehr setzen"
			},
			effect: {
				en: "If Vigoroth has any damage counters on it, this attack does 50 damage plus 20 more damage.",
				fr: "Si Vigoroth possède des marqueurs de dégât, cette attaque inflige 50 dégâts plus 20 dégâts supplémentaires.",
				de: "Wenn auf Muntier mindestens 1 Schadensmarke liegt, fügt dieser Angriff 50 Schadenspunkte plus 20 weitere Schadenspunkte zu."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],

	retreat: 1,

	description: {
		en: "Its heart beats at a tenfold tempo, so it cannot sit still even for a moment.",
		de: "Sein Herz schlägt schneller als das anderer Lebewesen. Daher kann es nicht für einen Moment still sitzen."
	},

	variants: [
		{
			type:"normal",
			thirdParty: {
				tcgplayer: 90371,
				cardmarket: 278485
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278485,
				tcgplayer: 90371
			}
		}
	],

}

export default card
