import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"
import { Charizard } from "./Boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Exeggutor ex"
	},

	illustrator: "PLANETA CG Works",
	category: "Pokemon",
	hp: 160,
	types: ["Grass"],
	stage: "Stage1",
	evolveFrom: {
		en: "Exeggcute"
	},
	suffix: "EX",
	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Tropical Swing"
		},

		effect: {
			en: "Flip a coin. If heads, this attack does 40 more damage."
		},

		damage: "40+"
	}],
	retreat: 3,
	rarity: "Two Star",
	boosters: [Charizard]
}

export default card
