import { Card } from "../../../interfaces"
import Set from "../Shining Revelry"

const card: Card = {
	set: Set,

	name: {
		en: "Riolu"
	},

	illustrator: "GOSSAN",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		en: "They communicate with one another using their auras. They are able to run all through the night."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Punch"
		},

		damage: 40,
		cost: ["Fighting", "Fighting"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 1
}

export default card