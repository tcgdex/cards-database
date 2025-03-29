import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		en: "Riolu"
	},

	illustrator: "Akira Komayama",
	rarity: "None",
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

		cost: ["Fighting", "Fighting"],
		damage: 40
	}],

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 1
}

export default card
