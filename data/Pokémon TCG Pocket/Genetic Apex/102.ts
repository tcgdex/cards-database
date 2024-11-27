import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Jolteon"
	},

	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],
	stage: "Stage1",

	attacks: [{
		cost: ["Lightning", "Colorless"],

		name: {
			en: "Pin Missile"
		},

		effect: {
			en: "Flip 4 coins. This attack does 40 damage for each heads."
		},

		damage: "40x"
	}],

	retreat: 1,
	rarity: "Three Diamond"
}

export default card
