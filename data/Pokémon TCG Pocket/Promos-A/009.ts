import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		en: "Pikachu"
	},

	illustrator: "Atsushi Furusawa",
	rarity: "One Star",
	category: "Pokemon",
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Gnaw"
		},

		cost: ["Lightning"],
		damage: 20
	}]
}

export default card