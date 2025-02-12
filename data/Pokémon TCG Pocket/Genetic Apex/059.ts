import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"
import { Charizard } from "./Boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Poliwag"
	},

	illustrator: "Shibuzoh.",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Razor Fin"
		},

		damage: "10"
	}],

	retreat: 1,
	rarity: "One Diamond",
	boosters: [Charizard]
}

export default card
