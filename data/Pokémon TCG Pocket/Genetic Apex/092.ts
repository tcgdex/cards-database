import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Snom"
	},

	category: "Pokemon",
	hp: 50,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Ram"
		},

		damage: "10"
	}],

	retreat: 1,
	rarity: "One Diamond"
}

export default card
