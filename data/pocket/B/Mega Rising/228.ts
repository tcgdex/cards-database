import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Skiddo"
	},

	illustrator: "Shinya Komatsu",
	rarity: "One Star",
	category: "Pokemon",

	dexId: [672],
	hp: 80,
	types: ["Grass"],

	description: {
		'en-us': "As long as it has sunlight and water, Skiddo can\nmake energy with the leaves on its body, allowing\nit to live on rocky mountains barren of food."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Razor Leaf"
		},

		damage: 30,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2,

	boosters: ["mega-altaria"]
}

export default card