import { Card } from '../../../interfaces'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		en: "Bisharp",
		fr: "Scalproie",
		es: "Bisharp",
		it: "Bisharp",
		pt: "Bisharp",
		de: "Caesurio"
	},

	illustrator: "Naoki Saito",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		625,
	],

	hp: 100,

	types: [
		"Metal",
	],

	evolveFrom: {
		en: "Pawniard",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Aerial Ace",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 more damage.",
			},
			damage: 20,

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Metal Claw",
			},

			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 280400
	}
}

export default card
