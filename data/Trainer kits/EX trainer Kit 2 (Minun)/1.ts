import { Card } from '../../../interfaces'
import Set from '../EX trainer Kit 2 (Minun).ts'

const card: Card = {
	dexId: [59],
	set: Set,

	name: {
		en: "Arcanine"
	},

	illustrator: "Ken Sugimori",
	rarity: "None",
	category: "Pokemon",
	stage: "Stage1",

	hp: 90,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Growlithe",
	},

	attacks: [{
		cost: [
			"Fire",
		],
		name: {
			en: "Flare"
		},
		damage: 20
	}, {
		cost: [
			"Fire",
			"Colorless",
			"Colorless",
			"Colorless"
		],
		name: {
			en: "Heat Tackle"
		},
		effect: {
			en: "Arcanine does 10 damage to itself."
		},
		damage: 70
	}],

	weaknesses: [
		{
			type: "Water",
			value: "2x"
		},
	],

	retreat: 2,
}

export default card
