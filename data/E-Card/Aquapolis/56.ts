import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Pupitar",
	},
	illustrator: "Naoyo Kimura",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		247,
	],
	hp: 80,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Larvitar",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Thrash",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 30 damage plus 10 more damage. If tails, Pupitar does 10 damage to itself.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],





}

export default card
