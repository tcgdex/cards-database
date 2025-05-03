import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Kricketot"
	},

	illustrator: "Shigenori Negishi",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		en: "Its legs are short. Whenever it stumbles, its stiff antennae clack with a xylophone-like sound."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Bug Bite"
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
