import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Simisage"
	},

	illustrator: "tetsuya koizumi",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [512],
	hp: 100,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Pansage"
	},

	description: {
		'en-us': "Ill tempered, it fights by swinging its barbed tail\naround wildly. The leaf growing on its head is\nvery bitter."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Fury Swipes"
		},

		damage: 40,
		cost: ["Grass", "Colorless"],

		effect: {
			'en-us': "Flip 3 coins. This attack does 40 damage for each heads."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-gyarados"]
}

export default card