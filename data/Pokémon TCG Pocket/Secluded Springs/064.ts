import { Card } from "../../../interfaces"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		en: "Swablu",
		fr: "Tylton"
	},

	illustrator: "0313",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [333],
	hp: 50,
	types: ["Colorless"],

	description: {
		en: "It constantly grooms its cotton-like wings. It takes\na shower to clean itself if it becomes dirty.",
		fr: "Il toilette constamment ses ailes duveteuses. À la moindre salissure, il se dépêche de se laver pour qu'elles restent aussi blanches que possible."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Peck",
			fr: "Picpic"
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