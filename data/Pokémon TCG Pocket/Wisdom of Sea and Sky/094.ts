import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Gligar"
	},

	illustrator: "Mina Nakai",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],

	description: {
		en: "It usually clings to cliffs. When it spots its prey,\nit spreads its wings and glides down to attack."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Glide"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1
}

export default card