import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Totodile"
	},

	illustrator: "kawayoo",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		en: "It is small but rough and tough. It won't hesitate to\ntake a bite out of anything that moves."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Wave Splash"
		},

		damage: 20,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["ho-oh"]
}

export default card