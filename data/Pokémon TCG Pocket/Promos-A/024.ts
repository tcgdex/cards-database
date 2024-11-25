import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		en: "Magnemite"
	},

	illustrator: "Miki Tanaka",
	rarity: "Three Diamond",
	category: "Pokemon",
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Lightning Ball"
		},

		cost: ["Lightning"],
		damage: 20
	}]
}

export default card