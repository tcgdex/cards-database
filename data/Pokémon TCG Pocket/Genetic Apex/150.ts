import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Onix"
	},

	illustrator: "otumami",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting", "Fighting", "Fighting"],

		name: {
			en: "Land Crush"
		},

		damage: "70"
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 4,
	rarity: "Two Diamond",

	description: {
		en: "As it digs through the ground, it absorbs many hard objects. This is what makes its body so solid.",
	}
}

export default card
