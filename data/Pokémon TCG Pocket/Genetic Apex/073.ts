import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Seaking"
	},

	category: "Pokemon",
	hp: 100,
	types: ["Water"],
	stage: "Stage2",

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
	rarity: "None"
}

export default card