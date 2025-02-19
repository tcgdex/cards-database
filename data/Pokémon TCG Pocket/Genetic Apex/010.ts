import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"
import { Mewtwo } from "./Boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Beedrill"
	},

	illustrator: "You Iribi",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],
	stage: "Stage2",
	evolveFrom: {
		en: "Kakuna"
	},

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Sharp Sting"
		},

		damage: "70"
	}],

	retreat: 1,
	rarity: "Three Diamond",
	boosters: [Mewtwo]
}

export default card
