import { Card } from '../../../interfaces'
import Set from '../Black & White'

const card: Card = {
	name: {
		en: "Tepig",
		fr: "Gruikui",
		es: "Tepig",
		it: "Tepig",
		pt: "Tepig",
		de: "Floink"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		498,
	],

	hp: 60,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Tackle",
				fr: "Charge",
			},

			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Rollout",
				fr: "Roulade",
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 279753
	}
}

export default card
