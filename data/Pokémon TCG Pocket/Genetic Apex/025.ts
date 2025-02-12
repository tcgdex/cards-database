import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"
import { Mewtwo } from "./Boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Scyther"
	},

	illustrator: "Hasuno",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Sharp Scythe"
		},

		damage: "30"
	}],

	retreat: 1,
	rarity: "One Diamond",
	boosters: [Mewtwo]
}

export default card
