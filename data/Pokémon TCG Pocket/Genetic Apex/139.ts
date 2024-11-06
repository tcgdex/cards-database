import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Diglett"
	},

	category: "Pokemon",
	hp: 50,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Mud Slap"
		},

		damage: "20"
	}],

	retreat: 1,
	rarity: "None"
}

export default card