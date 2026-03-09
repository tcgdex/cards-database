import { Card } from "../../../interfaces"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	name: {
		en: "Raboot"
	},

	illustrator: "Mizue",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	evolveFrom: {
		en: "Scorbunny"
	},

	description: {
		en: "While it prides itself on its varied kicking moves,\nit can also deliver powerful headbutts once its\nflames have heated up its forehead."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Kick"
		},

		damage: 40,
		cost: ["Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 1
}

export default card