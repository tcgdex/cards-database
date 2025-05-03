import { Card } from '../../../interfaces'
import Set from '../EX trainer Kit (Latias)'

const card: Card = {
	dexId: [255],
	set: Set,

	name: {
		en: "Torchic"
	},

	illustrator: "Hironobu Yoshida",
	rarity: "None",
	category: "Pokemon",
	stage: "Basic",

	hp: 50,

	types: [
		"Fire",
	],

	attacks: [{
		cost: [
			"Fire",
			"Colorless"
		],
		name: {
			en: "Firebreathing"
		},
		effect: {
			en: "Flip a coin. If heads, this attack does 20 damage plus 20 more damage."
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
