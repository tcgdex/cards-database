import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		en: "Onix"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "None",
	category: "Pokemon",
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Land Crush"
		},

		cost: ["Fighting", "Fighting", "Fighting"],
		damage: 70
	}],

	hp: 110,

	description: {
		en: "As it digs through the ground, it absorbs many hard objects. This is what makes its body so solid."
	},

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 4
}

export default card
