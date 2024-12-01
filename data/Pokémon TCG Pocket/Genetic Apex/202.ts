import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Chansey"
	},

	illustrator: "MAHOU",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Gentle Slap"
		},

		damage: "60"
	}],

	retreat: 3,
	rarity: "Two Diamond"
}

export default card
