import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Luxio"
	},

	illustrator: "NC Empire",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [404],
	hp: 90,
	types: ["Lightning"],

	evolveFrom: {
		'en-us': "Shinx"
	},

	description: {
		'en-us': "By gathering their tails together, they collectively\ngenerate powerful electricity from their claws."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Bite"
		},

		damage: 30,
		cost: ["Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-blaziken"]
}

export default card