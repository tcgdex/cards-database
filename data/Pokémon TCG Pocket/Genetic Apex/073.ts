import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"
import { Pikachu } from "./Boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Seaking"
	},

	illustrator: "Kyoko Umemoto",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],
	stage: "Stage1",
	evolveFrom: {
		en: "Goldeen"
	},


	attacks: [{
		cost: ["Water"],

		name: {
			en: "Horn Hazard"
		},

		effect: {
			en: "Flip a coin. If tails, this attack does nothing."
		},

		damage: "80"
	}],

	retreat: 1,
	rarity: "One Diamond",
	boosters: [Pikachu]
}

export default card
