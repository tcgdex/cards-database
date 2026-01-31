import { Card } from "../../../interfaces"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	name: {
		en: "Purrloin"
	},

	illustrator: "sowsow",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],

	description: {
		en: "Opponents that get drawn in by its adorable\nbehavior come away with stinging scratches from\nits claws and stinging pride from its laughter."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Whiny Voice"
		},

		cost: ["Darkness"],

		effect: {
			en: "Flip a coin. If heads, look at a random card from your opponent's hand and shuffle it into their deck."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1
}

export default card