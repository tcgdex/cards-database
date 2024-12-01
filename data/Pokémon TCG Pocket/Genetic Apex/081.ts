import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Omanyte"
	},

	illustrator: "Suwama Chiaki",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],
	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Water Gun"
		},

		damage: "40"
	}],

	retreat: 2,
	rarity: "Two Diamond"
}

export default card
