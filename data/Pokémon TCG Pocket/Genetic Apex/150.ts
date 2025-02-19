import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"
import { Pikachu } from "./Boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Onix"
	},

	illustrator: "otumami",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting", "Fighting", "Fighting"],

		name: {
			en: "Land Crush"
		},

		damage: "70"
	}],

	retreat: 4,
	rarity: "Two Diamond",
	boosters: [Pikachu]
}

export default card
