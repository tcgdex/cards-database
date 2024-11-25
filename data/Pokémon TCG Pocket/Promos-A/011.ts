import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		en: "Chansey"
	},

	illustrator: "sowsow",
	rarity: "Three Diamond",
	category: "Pokemon",
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Gentle Slap"
		},

		cost: ["Colorless", "Colorless", "Colorless"],
		damage: 60
	}]
}

export default card