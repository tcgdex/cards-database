import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"
import { Pikachu } from "./Boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Magikarp"
	},

	illustrator: "Sekio",
	category: "Pokemon",
	hp: 30,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Splash"
		},

		damage: "10"
	}],

	retreat: 1,
	rarity: "One Diamond",
	boosters: [Pikachu]
}

export default card
