import { Card } from "../../../interfaces"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		en: "Steenee"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	evolveFrom: {
		en: "Bounsweet"
	},

	description: {
		en: "Steenee spreads a sweet scent that\nmakes others feel invigorated. This same\nscent is popular for antiperspirants."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Leaf Step"
		},

		damage: 40,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2
}

export default card