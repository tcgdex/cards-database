import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Drowzee",
		fr: "Crocrodil",
		de: "Tyracroc"
	},

	illustrator: "Hisao Nakamura",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [96],

	hp: 50,

	types: [
		"Psychic"
	],

	evolveFrom: {
		en: "Totodile",
		fr: "Kaiminus"
	},

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sleep Inducer",
				fr: "Charge",
				de: "Tackle"
			},

			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tackle",
				fr: "Bélier",
				de: "Bodycheck"
			},
			effect: {
				en: "Croconaw does 10 damage to itself.",
				fr: "Crocrodil s'inflige 10 dégâts.",
				de: "Tyracroc fügt sich selber 10 Schadenspunkte zu."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84497,
				cardmarket: 274949
			},
		},
		{
			type: "reverse",
		}
	],
}

export default card
