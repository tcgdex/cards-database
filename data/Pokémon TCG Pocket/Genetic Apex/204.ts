import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Tauros"
	},

	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Horn Attack"
		},

		damage: "50"
	}],

	retreat: 2,
	rarity: "Two Diamond"
}

export default card
