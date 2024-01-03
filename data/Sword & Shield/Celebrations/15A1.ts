import { Card } from '../../../interfaces'
import Set from '../Celebrations'

const card: Card = {
	set: Set,

	name: {
		en: "Venusaur"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Classic Collection",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],
	stage: "Stage2",

	attacks: [{
		name: {
			en: "Solarbeam"
		},

		damage: 60,
		cost: ["Grass", "Grass", "Grass", "Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: ""
	}],

	retreat: 2
}

export default card
