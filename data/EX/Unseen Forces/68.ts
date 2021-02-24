import { Card } from '../../../interfaces'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		en: "Poliwhirl",
	},
	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		61,
	],
	hp: 70,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Poliwag",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Energy Ball",
			},
			effect: {
				en: "Does 30 damage plus 10 more damage for each Energy attached to Poliwhirl but not used to pay for this attack's Energy cost. You can't add more than 20 damage in this way.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],





}

export default card
