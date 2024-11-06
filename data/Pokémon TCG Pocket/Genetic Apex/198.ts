import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Farfetch'd"
	},

	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Leek Slap"
		},

		damage: "40"
	}],

	retreat: 1,
	rarity: "None"
}

export default card