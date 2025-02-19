import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		en: "Squirtle"
	},

	illustrator: "Kanako Eo",
	rarity: "None",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		en: "When it retracts its long neck into its shell, it squirts out water with vigorous force."
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
