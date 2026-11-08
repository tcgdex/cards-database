import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Loudred"
	},

	illustrator: "MAHOU",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [294],
	hp: 90,
	types: ["Colorless"],

	evolveFrom: {
		'en-us': "Whismur"
	},

	description: {
		'en-us': "The force of this Pokémon's loud voice isn't just\nthe sound—it's also the wave of air pressure that\nblows opponents away and damages them."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Hyper Voice"
		},

		damage: 40,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2,

	boosters: ["mega-gyarados"]
}

export default card