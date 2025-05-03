import { Card } from '../../../interfaces'
import Set from '../EX trainer Kit (Latios)'

const card: Card = {
	dexId: [263],
	set: Set,

	name: {
		en: "Zigzagoon"
	},

	illustrator: "Atsuko Nishida",
	rarity: "None",
	category: "Pokemon",
	stage: "Basic",

	hp: 40,

	types: [
		"Colorless",
	],

	attacks: [{
		cost: [
			"Colorless",
		],
		name: {
			en: "Fury Swipes"
		},
		effect: {
			en: "Flip 3 coins. This attack does 10 damage times the number of heads."
		},
		damage: "10×"
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
