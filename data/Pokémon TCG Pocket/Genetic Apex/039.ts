import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Growlithe"
	},

	illustrator: "Mizue",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Bite"
		},

		damage: "20"
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond",

	description: {
		en: "It has a brave and trustworthy nature. It fearlessly stands up to bigger and stronger foes.",
	}
}

export default card
