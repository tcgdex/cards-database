import { Card } from '../../../interfaces'
import Set from '../Fossil'

const card: Card = {
	name: {
		en: "Seadra",
	},
	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		117,
	],
	hp: 60,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Horsea",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Water Gun",
			},
			effect: {
				en: "Does 20 damage plus 10 more damage for each Energy attached to Seadra but not used to pay for this attack's Energy cost. You can't add more than 20 damage in this way.",
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
				en: "Agility",
			},
			effect: {
				en: "Flip a coin. If heads, during your opponent's next turn, prevent all effects of attacks, including damage, done to Seadra.",
			},
			damage: 20,

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
