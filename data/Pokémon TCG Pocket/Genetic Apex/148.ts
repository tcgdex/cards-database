import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Graveler"
	},

	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],
	stage: "Stage1",

	attacks: [{
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			en: "Rollout"
		},

		damage: "70"
	}],

	retreat: 3,
	rarity: "Two Diamond"
}

export default card
