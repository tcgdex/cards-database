import { Card } from '../../../interfaces'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		en: "Vanillish",
		fr: "Sorboul",
		es: "Vanillish",
		it: "Vanillish",
		pt: "Vanillish",
		de: "Gelatroppo"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		583,
	],

	hp: 70,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Vanillite",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Triple Spin",
			},
			effect: {
				en: "Flip 3 coins. This attack does 20 damage times the number of heads.",
			},
			damage: 20,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Frost Breath",
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 280362
	}
}

export default card
