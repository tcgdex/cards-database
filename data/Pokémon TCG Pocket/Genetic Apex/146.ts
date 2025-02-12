import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"
import { Charizard } from "./boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Machamp ex"
	},

	illustrator: "PLANETA CG Works",
	category: "Pokemon",
	hp: 180,
	types: ["Fighting"],
	stage: "Stage2",
	evolveFrom: {
		en: "Machoke"
	},

	suffix: "EX",

	attacks: [{
		cost: ["Fighting", "Fighting", "Fighting"],

		name: {
			en: "Mega Punch"
		},

		damage: "120"
	}],

	retreat: 3,
	rarity: "Four Diamond",
	boosters: [Charizard]
}

export default card
