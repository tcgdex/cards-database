import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Pansage"
	},

	illustrator: "Jerky",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [511],
	hp: 60,
	types: ["Grass"],

	description: {
		'en-us': "It's good at finding berries and gathers them from\nall over. It's kind enough to share them\nwith friends."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Beat"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-gyarados"]
}

export default card