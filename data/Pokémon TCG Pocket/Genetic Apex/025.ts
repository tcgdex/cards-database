import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Scyther"
	},

	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Sharp Scythe"
		},

		damage: "30"
	}],

	retreat: 1,
	rarity: "One Diamond"
}

export default card
