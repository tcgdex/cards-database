import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Hitmontop"
	},

	illustrator: "sowsow",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],

	description: {
		en: "It launches kicks while spinning. If it spins at high speed, it may bore its way into the ground."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Spinning Attack"
		},

		damage: 50,
		cost: ["Fighting", "Fighting"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 1
}

export default card
