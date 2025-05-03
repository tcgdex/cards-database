import { Card } from '../../../interfaces'
import Set from '../EX trainer Kit 2 (Minun).ts'

const card: Card = {
	dexId: [4],
	set: Set,

	name: {
		en: "Charmander"
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
			en: "Headbutt"
		},
		damage: 10
	}, {
		cost: [
			"Colorless",
			"Colorless"
		],
		name: {
			en: "Slash"
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
}

export default card
