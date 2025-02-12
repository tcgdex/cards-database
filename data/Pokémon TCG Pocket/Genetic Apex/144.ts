import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"
import { Charizard } from "./boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Machoke"
	},

	illustrator: "match",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],
	stage: "Stage1",
	evolveFrom: {
		en: "Machop"
	},


	attacks: [{
		cost: ["Fighting", "Fighting"],

		name: {
			en: "Strength"
		},

		damage: "50"
	}],

	retreat: 2,
	rarity: "Two Diamond",
	boosters: [Charizard]
}

export default card
