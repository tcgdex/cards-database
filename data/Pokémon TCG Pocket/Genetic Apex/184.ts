import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Dragonair"
	},

	category: "Pokemon",
	hp: 100,
	types: ["Dragon"],
	stage: "Stage1",

	attacks: [{
		cost: ["Water", "Lightning", "Colorless"],

		name: {
			en: "Tail Smack"
		},

		damage: "80"
	}],

	retreat: 1,
	rarity: "None"
}

export default card