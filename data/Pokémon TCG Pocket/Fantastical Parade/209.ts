import { Card } from "../../../interfaces"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	name: {
		en: "Seadra"
	},

	illustrator: "Taiga Kasai",
	rarity: "One Shiny",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],

	evolveFrom: {
		en: "Horsea"
	},

	description: {
		en: "It's the males that raise the offspring. While\nSeadra are raising young, the spines on their\nbacks secrete thicker and stronger poison."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Razor Fin"
		},

		damage: 50,
		cost: ["Water", "Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card