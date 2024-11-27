import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Pinsir"
	},

	category: "Pokemon",
	hp: 90,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass", "Grass"],

		name: {
			en: "Double Horn"
		},

		effect: {
			en: "Flip 2 coins. This attack does 50 damage for each heads."
		},

		damage: "50x"
	}],

	retreat: 2,
	rarity: "One Star"
}

export default card
