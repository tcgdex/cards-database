import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Shellder"
	},

	category: "Pokemon",
	hp: 60,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Tongue Slap"
		},

		damage: "20"
	}],

	retreat: 1,
	rarity: "None"
}

export default card