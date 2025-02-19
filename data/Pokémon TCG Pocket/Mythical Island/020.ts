import { Card } from "../../../interfaces"
import Set from "../Mythical Island"

const card: Card = {
	set: Set,

	name: {
		en: "Finneon"
	},

	illustrator: "sui",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		en: "The line running down its side can store sunlight. It shines vividly at night."
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

	retreat: 1,
	rarity: "One Diamond"
}

export default card
