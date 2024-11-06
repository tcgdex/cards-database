import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Marowak"
	},

	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],
	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Bone Beatdown"
		},

		damage: "40"
	}],

	retreat: 1,
	rarity: "None"
}

export default card