import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Phantump"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [708],
	hp: 60,
	types: ["Grass"],

	description: {
		'en-us': "With a voice like a human child's, it cries out to\nlure adults deep into the forest, getting them lost\namong the trees."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Branch Poke"
		},

		damage: 40,
		cost: ["Grass", "Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-altaria", "mega-blaziken", "mega-gyarados"]
}

export default card