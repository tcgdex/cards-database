import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Geodude"
	},

	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Tackle"
		},

		damage: "20"
	}],

	retreat: 2,
	rarity: "One Diamond"
}

export default card
