import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

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

		damage: "80×"
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1,
	rarity: "Two Star"
}

export default card
