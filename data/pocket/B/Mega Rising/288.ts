import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Weepinbell"
	},

	illustrator: "MAHOU",
	rarity: "One Shiny",
	category: "Pokemon",

	dexId: [70],
	hp: 90,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Bellsprout"
	},

	description: {
		'en-us': "The leafy parts act as cutters for slashing foes.\nIt spits a fluid that dissolves everything."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Razor Leaf"
		},

		damage: 40,
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