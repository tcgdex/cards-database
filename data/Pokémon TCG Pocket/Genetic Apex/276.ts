import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"
import { Pikachu } from "./boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Zapdos ex"
	},

	illustrator: "GOSSAN",
	category: "Pokemon",
	hp: 130,
	types: ["Lightning"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		cost: ["Lightning"],

		name: {
			en: "Peck"
		},

		damage: "20"
	}, {
		cost: ["Lightning", "Lightning", "Lightning"],

		name: {
			en: "Thundering Hurricane"
		},

		effect: {
			en: "Flip 4 coins. This attack does 50 damage for each heads."
		},

		damage: "50x"
	}],

	retreat: 2,
	rarity: "Two Star",
	boosters: [Pikachu]
}

export default card
