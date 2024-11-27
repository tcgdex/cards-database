import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Heatmor"
	},

	category: "Pokemon",
	hp: 80,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			en: "Combustion"
		},

		damage: "30"
	}],

	retreat: 1,
	rarity: "One Diamond"
}

export default card
