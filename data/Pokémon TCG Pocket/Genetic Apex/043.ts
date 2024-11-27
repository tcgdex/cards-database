import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Rapidash"
	},

	category: "Pokemon",
	hp: 100,
	types: ["Fire"],
	stage: "Stage1",

	attacks: [{
		cost: ["Fire"],

		name: {
			en: "Fire Mane"
		},

		damage: "40"
	}],

	retreat: 1,
	rarity: "Two Diamond"
}

export default card
