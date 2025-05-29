import { Card } from "../../../interfaces"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		en: "Baltoy"
	},

	illustrator: "Uta",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],

	description: {
		en: "It moves while spinning around on its single foot.\nSome Baltoy have been seen spinning on\ntheir heads."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Spinning Attack"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1
}

export default card