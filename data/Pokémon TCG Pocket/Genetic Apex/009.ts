import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Kakuna"
	},

	category: "Pokemon",
	hp: 80,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Bug Bite"
		},

		damage: "30"
	}],

	retreat: 2,
	rarity: "One Diamond"
}

export default card