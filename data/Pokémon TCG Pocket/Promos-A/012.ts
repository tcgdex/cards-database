import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		en: "Meowth"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Three Diamond",
	category: "Pokemon",
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Pay Day"
		},

		cost: ["Colorless"],
		damage: 10,

		effect: {
			en: "Draw 1 card."
		}
	}]
}

export default card