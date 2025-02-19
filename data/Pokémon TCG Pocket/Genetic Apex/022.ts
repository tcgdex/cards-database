import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"
import { Charizard } from "./Boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Exeggutor"
	},

	illustrator: "Yukiko Baba",
	category: "Pokemon",
	hp: 160,
	types: ["Grass"],
	stage: "Stage1",
	evolveFrom: {
		en: "Exeggcute"
	},

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Stomp"
		},

		effect: {
			en: "Flip a coin. If heads, this attack does 30 more damage."
		},

		damage: "30+"
	}],

	retreat: 3,
	rarity: "Three Diamond",
	boosters: [Charizard]
}

export default card
