import { Card } from '../../../interfaces'
import Set from '../POP Series 5'

const card: Card = {
	name: {
		en: "Pikachu δ",
	},

	illustrator: "Ryo Ueda",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		25,
	],

	hp: 40,

	types: [
		"Metal",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Electric Punch",
			},

			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Heavy Metal",
			},
			effect: {
				en: "Flip a coin for each Metal Energy attached to Pikachu. This attack does 10 damage plus 20 more damage for each heads.",
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Fighting"
		},
	],

	retreat: 1,

	variants: {
		normal: true,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 277495
	}
}

export default card
