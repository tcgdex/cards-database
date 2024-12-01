import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Snorlax"
	},

	illustrator: "Naoki Saito",
	category: "Pokemon",
	hp: 150,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"],

		name: {
			en: "Rollout"
		},

		damage: "70"
	}],

	retreat: 4,
	rarity: "Three Diamond"
}

export default card
