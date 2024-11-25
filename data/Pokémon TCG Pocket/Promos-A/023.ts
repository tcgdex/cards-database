import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		en: "Bulbasaur"
	},

	illustrator: "Kouki Saitou",
	rarity: "Three Diamond",
	category: "Pokemon",
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Vine Whip"
		},

		cost: ["Grass", "Colorless"],
		damage: 40
	}]
}

export default card