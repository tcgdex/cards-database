import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Psyduck"
	},

	illustrator: "nagimiso",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [54],
	hp: 60,
	types: ["Water"],

	description: {
		'en-us': "If its chronic headache peaks, it may exhibit\nodd powers. It seems unable to recall such an\nepisode."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Rain Splash"
		},

		damage: 20,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-blaziken"]
}

export default card