import { Card } from '../../../interfaces'
import Set from '../Celebrations'

const card: Card = {
	set: Set,

	name: {
		en: "Blastoise"
	},

	illustrator: "Ken Sugimori",
	rarity: "None",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],
	stage: "Stage2",

	attacks: [{
		name: {
			en: "Hydro Pump"
		},

		effect: {
			en: "Does 40 damage plus 10 more damage for each Water Energy attached to Blastoise but not used to pay for this attack’s Energy cost. Extra Water Energy after the 2nd doesn’t count."
		},

		damage: "40+",
		cost: ["Water", "Water", "Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: ""
	}],

	retreat: 3
}

export default card