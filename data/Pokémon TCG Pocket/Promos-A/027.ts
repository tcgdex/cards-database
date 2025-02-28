import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		en: "Snivy"
	},

	illustrator: "Yoriyuki Ikegami",
	rarity: "None",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		en: "Being exposed to sunlight makes its movements swifter. It uses vines more adeptly than its hands."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Tackle"
		},

		damage: 20,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card
