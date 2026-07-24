import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Dodrio",
		fr: "Aligatueur",
		de: "Impergator"
	},

	illustrator: "Yukiko Baba",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [85],

	hp: 70,

	types: [
		"Colorless"
	],

	evolveFrom: {
		en: "Croconaw",
		fr: "Crocrodil"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Tri Attack",
				fr: "Tranche",
				de: "Slash"
			},

			damage: "10×",

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Peck Attack",
				fr: "Combo-griffe",
				de: "Double Claw"
			},
			effect: {
				en: "Flip 2 coins. If 1 of them is heads, this attack does 20 damage. If both are heads, this attack does 50 damage. If both are tails, the Defending Pokémon is now Confused.",
				fr: "Lancez 2 pièces. Cette attaque inflige 30 dégâts plus 20 dégâts supplémentaires pour chaque face.",
				de: "Flip 2 coins. This attack does 30 damage plus 20 more damage for each heads."
			},
			damage: "30+",

		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],,
	weaknesses: [
		{
			type: "Lightning",
			value: "x2"
		},
	],
	retreat: 1,


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
		}
	],
}

export default card
