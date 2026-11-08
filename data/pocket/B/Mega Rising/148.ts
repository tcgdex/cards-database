import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Murkrow"
	},

	illustrator: "KEIICHIRO ITO",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [198],
	hp: 70,
	types: ["Darkness"],

	description: {
		'en-us': "If spotted, it will lure an unwary person\ninto chasing it, then lose the pursuer on\nmountain trails."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Glide"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-gyarados"]
}

export default card