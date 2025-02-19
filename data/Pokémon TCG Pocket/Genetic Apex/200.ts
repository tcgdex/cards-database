import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"
import { Charizard, Mewtwo, Pikachu } from "./Boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Dodrio"
	},

	illustrator: "Miki Tanaka",
	category: "Pokemon",
	hp: 80,
	types: ["Colorless"],
	stage: "Stage1",
	evolveFrom: {
		en: "Doduo"
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Drill Peck"
		},

		damage: "40"
	}],

	retreat: 0,
	rarity: "Two Diamond",
	boosters: [Mewtwo, Charizard, Pikachu]
}

export default card
