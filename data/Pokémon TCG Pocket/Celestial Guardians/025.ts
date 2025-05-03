import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Growlithe"
	},

	illustrator: "Naoyo Kimura",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	description: {
		en: "It has a brave and trustworthy nature. It fearlessly stands up to bigger and stronger foes."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Combustion"
		},

		damage: 30,
		cost: ["Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 2
}

export default card