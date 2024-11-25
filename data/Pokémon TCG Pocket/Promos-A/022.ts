import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		en: "Jigglypuff"
	},

	illustrator: "Kurata So",
	rarity: "One Diamond",
	category: "Pokemon",
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Sing"
		},

		cost: ["Colorless"],

		effect: {
			en: "Your opponent's Active Pokémon is now Asleep."
		}
	}]
}

export default card