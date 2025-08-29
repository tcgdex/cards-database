import { Card } from "../../../interfaces"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		en: "Slowpoke"
	},

	illustrator: "Saya Tsuruta",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		en: "It is incredibly slow and dopey. It takes five\nseconds for it to feel pain when under attack."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Water Gun"
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