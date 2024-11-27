import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Slowpoke"
	},

	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			en: "Tail Whap"
		},

		damage: "30"
	}],

	retreat: 2,
	rarity: "One Star"
}

export default card
