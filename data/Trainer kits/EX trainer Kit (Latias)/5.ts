import { Card } from '../../../interfaces'
import Set from '../EX trainer Kit (Latias)'

const card: Card = {
	dexId: [322],
	set: Set,

	name: {
		en: "Numel"
	},

	illustrator: "Yuka Morii",
	rarity: "None",
	category: "Pokemon",
	stage: "Basic",
	hp: 40,

	types: [
		"Fire",
	],

	attacks: [{
		cost: [
			"Fire",
		],
		name: {
			en: "Firebreathing"
		},
		effect: {
			en: "Flip a coin. If heads, this attack does 10 damage plus 10 more damage."
		},
		damage: "10+"
	}, {
		cost: [
			"Colorless",
			"Colorless"
		],
		name: {
			en: "Tackle"
		},
		damage: 20
	}],

	weaknesses: [
		{
			type: "Water",
			value: "2x"
		},
	],

	retreat: 1,

	thirdParty: {
		tcgplayer: 87808
	}
}

export default card
