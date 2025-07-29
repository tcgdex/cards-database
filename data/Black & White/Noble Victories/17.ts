import { Card } from '../../../interfaces'
import Set from '../Noble Victories'

const card: Card = {
	name: {
		en: "Simisear",
		fr: "Flamoutan",
		es: "Simisear",
		it: "Simisear",
		pt: "Simisear",
		de: "Grillchita"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		514,
	],

	hp: 90,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Pansear",
		fr: "Flamajou",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Scratch",
				fr: "Griffe",
			},

			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Double Fire",
				fr: "Double Feu",
			},
			effect: {
				en: "Flip 2 coins. This attack does 80 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 80 dégâts multipliés par le nombre de côtés face.",
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 280140
	}
}

export default card
