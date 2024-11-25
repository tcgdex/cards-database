import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		en: "Onix"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "One Diamond",
	category: "Pokemon",
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Land Crush"
		},

		cost: ["Fighting", "Fighting", "Fighting"],
		damage: 70
	}]
}

export default card