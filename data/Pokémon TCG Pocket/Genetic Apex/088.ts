import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Frogadier"
	},

	category: "Pokemon",
	hp: 80,
	types: ["Water"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Water Drip"
		},

		damage: "30"
	}],

	retreat: 1,
	rarity: "Two Diamond"
}

export default card
