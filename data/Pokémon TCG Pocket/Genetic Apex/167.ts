import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Nidorina"
	},

	category: "Pokemon",
	hp: 80,
	types: ["Darkness"],
	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Bite"
		},

		damage: "30"
	}],

	retreat: 1,
	rarity: "Two Diamond"
}

export default card
