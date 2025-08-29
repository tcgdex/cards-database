import { Card } from "../../../interfaces"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		en: "Swablu"
	},

	illustrator: "0313",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 50,
	types: ["Colorless"],

	description: {
		en: "It constantly grooms its cotton-like wings. It takes\na shower to clean itself if it becomes dirty."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Peck"
		},

		damage: 20,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card