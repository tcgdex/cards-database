import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Onix"
	},

	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting", "Fighting", "Fighting"],

		name: {
			en: "Land Crush"
		},

		damage: "70"
	}],

	retreat: 4,
	rarity: "Two Diamond"
}

export default card
