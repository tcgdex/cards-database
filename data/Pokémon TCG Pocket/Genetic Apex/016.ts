import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"
import { Mewtwo } from "./Boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Venonat"
	},

	illustrator: "HYOGONOSUKE",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Tackle"
		},

		damage: "20"
	}],

	retreat: 1,
	rarity: "One Diamond",
	boosters: [Mewtwo]
}

export default card
