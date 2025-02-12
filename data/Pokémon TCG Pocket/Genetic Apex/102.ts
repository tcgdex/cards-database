import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"
import { Pikachu } from "./boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Jolteon"
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],
	stage: "Stage1",
	evolveFrom: {
		en: "Eevee"
	},


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
	rarity: "Three Diamond",
	boosters: [Pikachu]
}

export default card
