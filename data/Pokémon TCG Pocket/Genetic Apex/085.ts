import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"
import { Charizard } from "./Boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Ducklett"
	},

	illustrator: "Yumi",
	category: "Pokemon",
	hp: 50,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Flap"
		},

		damage: "30"
	}],

	retreat: 1,
	rarity: "One Diamond",
	boosters: [Charizard]
}

export default card
