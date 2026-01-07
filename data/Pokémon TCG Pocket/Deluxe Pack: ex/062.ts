import { Card } from "../../../interfaces"
import Set from "../Deluxe Pack: ex"

const card: Card = {
	set: Set,

	name: {
		en: "Growlithe"
	},

	illustrator: "Mizue",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	description: {
		en: "It has a brave and trustworthy nature. It fearlessly\nstands up to bigger and stronger foes."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Bite"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 1
}

export default card