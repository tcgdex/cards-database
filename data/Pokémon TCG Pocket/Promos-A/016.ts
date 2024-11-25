import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		en: "Clefairy"
	},

	illustrator: "Shibuzoh.",
	rarity: "One Diamond",
	category: "Pokemon",
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Slap"
		},

		cost: ["Psychic"],
		damage: 20
	}]
}

export default card