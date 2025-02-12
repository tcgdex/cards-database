import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"
import { Charizard, Mewtwo, Pikachu } from "./boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Bisharp"
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 90,
	types: ["Metal"],
	stage: "Stage1",
	evolveFrom: {
		en: "Pawniard"
	},

	attacks: [{
		cost: ["Metal", "Metal"],

		name: {
			en: "Metal Claw"
		},

		damage: "70"
	}],

	retreat: 1,
	rarity: "Two Diamond",
	boosters: [Mewtwo, Charizard, Pikachu]
}

export default card
