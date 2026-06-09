import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Skiddo"
	},

	illustrator: "Saya Tsuruta",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [672],
	hp: 80,
	types: ["Grass"],

	description: {
		en: "As long as it has sunlight and water, Skiddo can\nmake energy with the leaves on its body, allowing\nit to live on rocky mountains barren of food."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Razor Leaf"
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