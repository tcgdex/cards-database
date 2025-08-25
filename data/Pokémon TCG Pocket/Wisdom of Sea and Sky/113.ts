import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Murkrow"
	},

	illustrator: "Sekio",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],

	description: {
		en: "Feared and loathed by many, it is believed to\nbring misfortune to all those who see it at night."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Astonish"
		},

		cost: ["Darkness"],

		effect: {
			en: "Flip a coin. If heads, your opponent reveals a random card from their hand and shuffles it into their deck."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["lugia"]
}

export default card