import { Card } from "models/database/card"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Steenee",
		'fr-fr': "Candine"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [762],
	hp: 80,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Bounsweet"
	},

	description: {
		'en-us': "Steenee spreads a sweet scent that\nmakes others feel invigorated. This same\nscent is popular for antiperspirants.",
		'fr-fr': "Il dégage un doux parfum qui a le pouvoir de redonner du tonus, et qui est très populaire en odeur de déodorant."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Leaf Step",
			'fr-fr': "Enjambée de Feuillage"
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