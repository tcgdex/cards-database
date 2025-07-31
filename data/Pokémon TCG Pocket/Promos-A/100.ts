import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		en: "Weavile"
	},

	illustrator: "Satoshi Shirai",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Darkness"],

	evolveFrom: {
		en: "Sneasel"
	},

	description: {
		en: "Evolution made it even more devious.\nIt communicates by clawing signs in boulders."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Slash"
		},

		damage: 50,
		cost: ["Darkness"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 0
}

export default card