import { Card } from '../../../interfaces'
import Set from '../EX trainer Kit 2 (Minun).ts'

const card: Card = {
	dexId: [37],
	set: Set,

	name: {
		en: "Vulpix"
	},

	illustrator: "Midori Harada",
	rarity: "None",
	category: "Pokemon",
	stage: "Basic",

	hp: 50,

	types: [
		"Fire",
	],

	attacks: [{
		cost: [
			"Colorless",
		],
		name: {
			en: "Bite"
		},
		damage: 10
	}, {
		cost: [
			"Fire",
			"Colorless"
		],
		name: {
			en: "Firebreathing"
		},
		effect: {
			en: "Flip a coin. If heads, this attack does 20 damage plus 10 more damage."
		},
		damage: "20+"
	}],

	weaknesses: [
		{
			type: "Water",
			value: "2x"
		},
	],

	retreat: 1,
}

export default card
