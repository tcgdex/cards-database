import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Dubwool"
	},

	illustrator: "You Iribi",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [832],
	hp: 130,
	types: ["Colorless"],

	evolveFrom: {
		'en-us': "Wooloo"
	},

	description: {
		'en-us': "Its majestic horns are meant only to impress the\nopposite gender. They never see use in battle."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Boundless Power"
		},

		damage: 100,
		cost: ["Colorless", "Colorless", "Colorless"],

		effect: {
			'en-us': "During your next turn, this Pokémon can't attack."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2,

	boosters: ["mega-altaria"]
}

export default card