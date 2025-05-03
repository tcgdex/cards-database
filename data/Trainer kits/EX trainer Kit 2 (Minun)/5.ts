import { Card } from '../../../interfaces'
import Set from '../EX trainer Kit 2 (Minun).ts'

const card: Card = {
	dexId: [179],
	set: Set,

	name: {
		en: "Mareep"
	},

	illustrator: "Naoyo Kimura",
	rarity: "None",
	category: "Pokemon",
	stage: "Basic",

	hp: 50,

	types: [
		"Lightning",
	],

	attacks: [{
		cost: [
			"Colorless",
		],
		name: {
			en: "Minor Errand-Running"
		},
		effect: {
			en: "Search your deck for a basic Energy card, show it to your opponent, and put it into your hand. Shuffle your deck afterward."
		}
	}, {
		cost: [
			"Lightning",
			"Colorless"
		],
		name: {
			en: "Quick Attack"
		},
		effect: {
			en: "Flip a coin. If heads, this attack does 10 damage plus 10 more damage."
		},
		damage: "10+"
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "2x"
		},
	],

	retreat: 1,
}

export default card
