import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Ponyta"
	},

	category: "Pokemon",
	hp: 60,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			en: "Flare"
		},

		damage: "20"
	}],

	retreat: 1,
	rarity: "One Diamond"
}

export default card
