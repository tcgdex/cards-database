import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Dratini"
	},

	illustrator: "Ayaka Yoshida",
	category: "Pokemon",
	hp: 70,
	types: ["Dragon"],
	stage: "Basic",

	attacks: [{
		cost: ["Water", "Lightning"],

		name: {
			en: "Ram"
		},

		damage: "40"
	}],

	retreat: 1,
	rarity: "One Diamond"
}

export default card
