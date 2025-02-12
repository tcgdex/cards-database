import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"
import { Charizard } from "./Boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Hitmonchan"
	},

	illustrator: "Ken Sugimori",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Jab"
		},

		damage: "30"
	}],

	retreat: 1,
	rarity: "One Diamond",
	boosters: [Charizard]
}

export default card
