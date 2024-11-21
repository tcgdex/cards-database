import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Weedle"
	},

	category: "Pokemon",
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Sting"
		},

		damage: "20"
	}],

	retreat: 1,
	rarity: "One Diamond"
}

export default card