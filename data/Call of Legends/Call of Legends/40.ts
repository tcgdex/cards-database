import { Card } from '../../../interfaces'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		en: "Bayleef",
		fr: "Macronium",
		de: "Lorblatt"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [153],

	hp: 90,

	types: [
		"Grass"
	],

	evolveFrom: {
		en: "Chikorita",
		fr: "Germignon"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Hammer In",
				fr: "Enfoncer",
				de: "Einhämmern"
			},

			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Razor Leaf",
				fr: "Tranch'herbe",
				de: "Rasierblatt"
			},

			damage: 50,

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
			value: "-20"
		},
	],
	retreat: 2,


	description: {
		en: "A spicy aroma emanates from around its neck. The aroma acts as a stimulant to restore health.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 83749,
				cardmarket: 279683
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 83749,
				cardmarket: 279683
			},
		},
	],

}

export default card
