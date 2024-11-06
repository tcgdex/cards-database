import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Kangaskhan"
	},

	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Dizzy Punch"
		},

		effect: {
			en: "Flip 2 coins. This attack does 30 damage times the number of heads."
		},

		damage: "30x"
	}],

	retreat: 3,
	rarity: "None"
}

export default card