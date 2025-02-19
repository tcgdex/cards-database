import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"
import { Mewtwo } from "./Boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Kakuna"
	},

	illustrator: "miki kudo",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],
	stage: "Stage1",
	evolveFrom: {
		en: "Weedle"
	},

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Bug Bite"
		},

		damage: "30"
	}],

	retreat: 2,
	rarity: "One Diamond",
	boosters: [Mewtwo]
}

export default card
