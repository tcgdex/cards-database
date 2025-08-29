import { Card } from "../../../interfaces"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		en: "Zorua"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],

	description: {
		en: "It changes into the forms of others to surprise\nthem. Apparently, it often transforms into a\nsilent child."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Ram"
		},

		damage: 20,
		cost: ["Darkness"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1
}

export default card