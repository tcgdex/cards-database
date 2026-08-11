import { Card } from "models/database/card"
import Set from "../Crimson Blaze"

const card: Card = {
	set: Set,

	dexId: [44],

	name: {
		'en-us': "Gloom"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "One Shiny",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Oddish"
	},

	description: {
		'en-us': "Its pistils exude an incredibly foul odor.\nThe horrid stench can cause fainting at a distance\nof 1.25 miles."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Leaf Step"
		},

		damage: 40,
		cost: ["Grass", "Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card