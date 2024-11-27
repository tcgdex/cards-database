import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Staryu"
	},

	category: "Pokemon",
	hp: 50,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Smack"
		},

		damage: "20"
	}],

	retreat: 1,
	rarity: "One Diamond"
}

export default card
