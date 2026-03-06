import { Card } from "../../../interfaces"
import Set from "../Crimson Blaze"

const card: Card = {
	set: Set,

	name: {
		en: "Clauncher"
	},

	illustrator: "Krgc",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		en: "Clauncher's claws will regrow if they fall off.\nThe meat inside the claws is edible, but it has a\ndistinct flavor that doesn't appeal to all tastes."
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