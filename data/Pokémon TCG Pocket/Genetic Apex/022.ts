import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Exeggutor"
	},

	category: "Pokemon",
	hp: 160,
	types: ["Grass"],
	stage: "Stage1",

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
	rarity: "Three Diamond"
}

export default card
