import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Pawniard"
	},

	category: "Pokemon",
	hp: 50,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Metal"],

		name: {
			en: "Pierce"
		},

		damage: "30"
	}],

	retreat: 1,
	rarity: "One Diamond"
}

export default card
