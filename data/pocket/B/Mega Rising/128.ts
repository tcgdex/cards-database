import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Hippopotas"
	},

	illustrator: "Yuya Oka",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [449],
	hp: 80,
	types: ["Fighting"],

	description: {
		'en-us': "It shrouds itself in sand to ward off germs.\nIt travels easily through the sands of the desert."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Mud Shot"
		},

		damage: 30,
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 3,

	boosters: ["mega-gyarados"]
}

export default card