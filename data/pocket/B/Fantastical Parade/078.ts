import { Card } from "models/database/card"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	dexId: [28],

	name: {
		'en-us': "Sandslash"
	},

	illustrator: "Yukiko Baba",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],

	evolveFrom: {
		'en-us': "Sandshrew"
	},

	description: {
		'en-us': "The spikes on its body are made up of its\nhardened hide. It rolls up and attacks foes\nwith its spikes."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Fury Swipes"
		},

		damage: 30,
		cost: ["Fighting"],

		effect: {
			'en-us': "Flip 3 coins. This attack does 30 damage for each heads."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1
}

export default card