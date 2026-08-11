import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Whismur"
	},

	illustrator: "Tika Matsuno",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [293],
	hp: 60,
	types: ["Colorless"],

	description: {
		'en-us': "When Whismur cries, the sound of its own voice\nstartles it, making the Pokémon cry even louder.\nIt cries until it's exhausted, then it falls asleep."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Pound"
		},

		damage: 20,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-gyarados"]
}

export default card