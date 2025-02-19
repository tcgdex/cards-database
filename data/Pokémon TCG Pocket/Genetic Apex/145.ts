import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"
import { Charizard } from "./Boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Machamp"
	},

	illustrator: "Hitoshi Ariga",
	category: "Pokemon",
	hp: 150,
	types: ["Fighting"],
	stage: "Stage2",
	evolveFrom: {
		en: "Machoke"
	},


	attacks: [{
		cost: ["Fighting", "Fighting", "Fighting"],

		name: {
			en: "Seismic Toss"
		},

		damage: "100"
	}],

	retreat: 3,
	rarity: "Three Diamond",
	boosters: [Charizard]
}

export default card
