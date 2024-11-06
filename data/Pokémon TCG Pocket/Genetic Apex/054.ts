import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Wartortle"
	},

	category: "Pokemon",
	hp: 80,
	types: ["Water"],
	stage: "Stage1",

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			en: "Wave Splash"
		},

		damage: "40"
	}],

	retreat: 1,
	rarity: "None"
}

export default card