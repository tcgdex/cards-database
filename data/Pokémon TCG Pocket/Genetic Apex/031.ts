import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Skiddo"
	},

	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Surprise Attack"
		},

		effect: {
			en: "Flip a coin. If tails, this attack does nothing."
		},

		damage: "40"
	}],

	retreat: 1,
	rarity: "One Diamond"
}

export default card
