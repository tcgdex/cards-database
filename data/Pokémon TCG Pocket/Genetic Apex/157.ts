import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"
import { Mewtwo } from "./boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Rhydon"
	},

	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],
	stage: "Stage1",
	evolveFrom: {
		en: "Rhyhorn"
	},


	attacks: [{
		cost: ["Fighting", "Fighting", "Fighting", "Colorless"],

		name: {
			en: "Horn Drill"
		},

		damage: "100"
	}],

	retreat: 4,
	rarity: "Two Diamond",
	boosters: [Mewtwo]
}

export default card
