import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

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
	suffix: "EX",

	attacks: [{
		cost: ["Water", "Water"],

		name: {
			en: "Hydro Splash"
		},

		damage: "90"
	}],

	retreat: 0,
	rarity: "Two Star"
}

export default card
