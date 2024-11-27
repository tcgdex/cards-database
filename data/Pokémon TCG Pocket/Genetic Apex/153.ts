import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Marowak ex"
	},

	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],
	stage: "Stage1",
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
	rarity: "Four Diamond"
}

export default card
