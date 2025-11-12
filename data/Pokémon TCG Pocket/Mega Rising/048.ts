import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Psyduck"
	},

	illustrator: "nagimiso",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		en: "If its chronic headache peaks, it may exhibit\nodd powers. It seems unable to recall such an\nepisode."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Rain Splash"
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