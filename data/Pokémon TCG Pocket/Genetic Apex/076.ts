import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"
import { Charizard } from "./boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Starmie ex"
	},

	illustrator: "PLANETA Igarashi",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],
	stage: "Stage1",
	evolveFrom: {
		en: "Staryu"
	},

	suffix: "EX",

	attacks: [{
		cost: ["Water", "Water"],

		name: {
			en: "Hydro Splash"
		},

		damage: "90"
	}],

	retreat: 0,
	rarity: "Four Diamond",
	boosters: [Charizard]
}

export default card
