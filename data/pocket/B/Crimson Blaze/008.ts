import { Card } from "models/database/card"
import Set from "../Crimson Blaze"

const card: Card = {
	set: Set,

	dexId: [192],

	name: {
		'en-us': "Sunflora"
	},

	illustrator: "Saboteri",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Sunkern"
	},

	description: {
		'en-us': "Since it converts sunlight into energy, it is always\nlooking in the direction of the sun."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Quick-Grow Beam"
		},

		damage: 30,
		cost: ["Grass"],

		effect: {
			'en-us': "If Quick-Grow Extract is in your discard pile, this attack does 30 more damage."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2
}

export default card