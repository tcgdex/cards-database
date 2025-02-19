import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"
import { Mewtwo } from "./Boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Marowak ex"
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],
	stage: "Stage1",
	evolveFrom: {
		en: "Cubone"
	},

	suffix: "EX",

	attacks: [{
		cost: ["Fighting", "Fighting"],

		name: {
			en: "Bonemerang"
		},

		effect: {
			en: "Flip 2 coins. This attack does 80 damage for each heads."
		},

		damage: "80x"
	}],

	retreat: 1,
	rarity: "Four Diamond",
	boosters: [Mewtwo]
}

export default card
