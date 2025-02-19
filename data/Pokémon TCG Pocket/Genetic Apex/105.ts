import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"
import { Charizard, Mewtwo, Pikachu } from "./Boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Blitzle"
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			en: "Zap Kick"
		},

		damage: "20"

	}],

	retreat: 1,
	rarity: "One Diamond",
	boosters: [Mewtwo, Charizard, Pikachu]
}

export default card
