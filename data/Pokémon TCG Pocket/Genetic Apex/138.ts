import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"
import { Charizard, Mewtwo, Pikachu } from "./Boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Sandslash"
	},

	illustrator: "Miki Tanaka",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],
	stage: "Stage1",
	evolveFrom: {
		en: "Sandshrew"
	},


	attacks: [{
		cost: ["Fighting", "Fighting"],

		name: {
			en: "Slash"
		},

		damage: "70"
	}],

	retreat: 2,
	rarity: "Two Diamond",
	boosters: [Mewtwo, Charizard, Pikachu]
}

export default card
