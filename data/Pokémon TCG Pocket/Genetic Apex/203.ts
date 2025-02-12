import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"
import { Charizard } from "./boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Kangaskhan"
	},

	illustrator: "Ken Sugimori",
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
	rarity: "Three Diamond",
	boosters: [Charizard]
}

export default card
