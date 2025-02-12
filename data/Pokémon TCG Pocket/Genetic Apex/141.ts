import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"
import { Charizard } from "./Boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Mankey"
	},

	illustrator: "Kanako Eo",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Low Kick"
		},

		damage: "20"
	}],

	retreat: 1,
	rarity: "One Diamond",
	boosters: [Charizard]
}

export default card
