import { Card } from '../../../interfaces'
import Set from '../Celebrations'

const card: Card = {
	set: Set,

	name: {
		en: "Charizard"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "None",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],
	stage: "Stage2",

	attacks: [{
		name: {
			en: "Fire Spin"
		},

		effect: {
			en: "Discard 2 Energy cards attached to Charizard in order to use this attack."
		},

		damage: 100,
		cost: ["Fire", "Fire", "Fire", "Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: ""
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 3
}

export default card