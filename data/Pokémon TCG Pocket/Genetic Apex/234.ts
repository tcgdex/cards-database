import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"
import { Charizard } from "./Boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Lapras"
	},

	illustrator: "Haru Akasaka",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Hydro Pump"
		},

		effect: {
			en: "If this Pokémon has at least 3 extra W Energy attached, this attack does 70 more damage."
		},

		damage: "20+"
	}],

	retreat: 2,
	rarity: "One Star",
	boosters: [Charizard]
}

export default card
