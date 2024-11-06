import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Machamp"
	},

	category: "Pokemon",
	hp: 150,
	types: ["Fighting"],
	stage: "Stage2",

	attacks: [{
		cost: ["Fighting", "Fighting", "Fighting"],

		name: {
			en: "Seismic Toss"
		},

		damage: "100"
	}],

	retreat: 3,
	rarity: "None"
}

export default card