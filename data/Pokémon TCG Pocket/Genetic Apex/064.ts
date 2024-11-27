import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Seel"
	},

	category: "Pokemon",
	hp: 80,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Headbutt"
		},

		damage: "30"
	}],

	retreat: 2,
	rarity: "One Diamond"
}

export default card
