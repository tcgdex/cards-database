import { Card } from "../../../interfaces"
import Set from "../Deluxe Pack: ex"

const card: Card = {
	set: Set,

	name: {
		en: "Staryu"
	},

	illustrator: "Hiroki Asanuma",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 50,
	types: ["Water"],

	description: {
		en: "If you visit a beach at the end of summer, you'll\nbe able to see groups of Staryu lighting up in a\nsteady rhythm."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Smack"
		},

		damage: 20,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card