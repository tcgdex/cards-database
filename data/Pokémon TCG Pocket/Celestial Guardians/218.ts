import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Staryu"
	},

	illustrator: "MAHOU",
	rarity: "One Shiny",
	category: "Pokemon",
	hp: 50,
	types: ["Water"],

	description: {
		en: "If you visit a beach at the end of summer, you'll be able to see groups of Staryu lighting up in a steady rhythm."
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