import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Bisharp"
	},

	category: "Pokemon",
	hp: 90,
	types: ["Metal"],
	stage: "Stage1",

	attacks: [{
		cost: ["Metal", "Metal"],

		name: {
			en: "Metal Claw"
		},

		damage: "70"
	}],

	retreat: 1,
	rarity: "None"
}

export default card