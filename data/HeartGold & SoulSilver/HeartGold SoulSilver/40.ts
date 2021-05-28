import { Card } from '../../../interfaces'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		en: "Donphan",
		fr: "Donphan",
	},
	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		232,
	],
	hp: 100,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Phanpy",
		fr: "Phanpy",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rock Hurl",
				fr: "Lance-pierre",
			},
			effect: {
				en: "This attack's damage isn't affected by Resistance.",
				fr: "Les dégâts infligés par cette attaque ne sont pas affectés par la Résistance.",
			},
			damage: 50,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Double Spin",
				fr: "Double tour",
			},
			effect: {
				en: "Flip 2 coins. This attack does 70 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 70 dégâts multipliés par le nombre de faces.",
			},
			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],
	retreat: 3,



}

export default card
