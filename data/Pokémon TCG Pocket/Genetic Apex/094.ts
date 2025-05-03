import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Pikachu"
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			en: "Gnaw"
		},

		damage: "20"
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond",

	description: {
		en: "When it is angered, it immediately discharges the energy stored in the pouches in its cheeks.",
	}
}

export default card
