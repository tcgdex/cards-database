import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Wash Rotom"
	},

	illustrator: "Saboteri",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],

	description: {
		en: "This Rotom has entered a washing machine. It nods with satisfaction after it floods the surrounding area."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Wave Splash"
		},

		damage: 30,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2
}

export default card
