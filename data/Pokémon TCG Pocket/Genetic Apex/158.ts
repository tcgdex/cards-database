import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"
import { Charizard } from "./boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Kabuto"
	},

	illustrator: "sui",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],
	stage: "Stage1",
	evolveFrom: {
		en: "Dome Fossil"
	},


	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Shell Attack"
		},

		damage: "40"
	}],

	retreat: 1,
	rarity: "Two Diamond",
	boosters: [Charizard]
}

export default card
