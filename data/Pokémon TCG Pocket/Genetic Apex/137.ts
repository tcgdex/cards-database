import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"
import { Charizard, Mewtwo, Pikachu } from "./Boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Sandshrew"
	},

	illustrator: "Miki Tanaka",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Scratch"
		},

		damage: "10"
	}],

	retreat: 1,
	rarity: "One Diamond",
	boosters: [Mewtwo, Charizard, Pikachu]
}

export default card
