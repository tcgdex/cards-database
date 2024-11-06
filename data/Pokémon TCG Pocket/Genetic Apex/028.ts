import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Whimsicott"
	},

	category: "Pokemon",
	hp: 80,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Rolling Tackle"
		},

		damage: "40"
	}],

	retreat: 1,
	rarity: "None"
}

export default card