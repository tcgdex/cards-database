import { Card } from '../../../interfaces'
import Set from '../POP Series 3'

const card: Card = {
	name: {
		en: "Vaporeon",
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		134,
	],

	hp: 70,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Diglett",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Bite",
			},

			damage: 20,

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Water Gun",
			},
			effect: {
				en: "Does 30 damage plus 20 more damage for each Water Energy attached to Vaporeon but not used to pay for this attack’s Energy cost. You can’t add more than 40 damage in this way.",
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Lightning"
		},
	],

	retreat: 1,

	variants: {
		normal: true,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 277454,
		tcgplayer: 90283
	}
}

export default card
