import { Card } from "models/database/card"
import Set from "../Crimson Blaze"

const card: Card = {
	set: Set,

	dexId: [428],

	name: {
		'en-us': "Lopunny"
	},

	illustrator: "Ryuta Fuse",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	evolveFrom: {
		'en-us': "Buneary"
	},

	description: {
		'en-us': "Once hot seasons are over, Lopunny's coat will\nbe replaced with fur that holds a lot of insulating\nair in preparation for colder weather."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Double Kick"
		},

		damage: 50,
		cost: ["Colorless", "Colorless"],

		effect: {
			'en-us': "Flip 2 coins. This attack does 50 damage for each heads."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card