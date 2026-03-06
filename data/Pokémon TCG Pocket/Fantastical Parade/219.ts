import { Card } from "../../../interfaces"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	name: {
		en: "Hitmonchan"
	},

	illustrator: "Shigenori Negishi",
	rarity: "One Shiny",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],

	description: {
		en: "Its punches slice the air. They are launched at\nsuch high speed, even a slight graze could cause\na burn."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Jab"
		},

		damage: 30,
		cost: ["Fighting"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 1
}

export default card