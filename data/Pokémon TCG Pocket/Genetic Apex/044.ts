import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Magmar"
	},

	category: "Pokemon",
	hp: 80,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire", "Fire"],

		name: {
			en: "Magma Punch"
		},

		damage: "50"
	}],

	retreat: 2,
	rarity: "None"
}

export default card