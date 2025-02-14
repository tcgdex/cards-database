import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"
import { Dialga, Palkia } from "./Boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Buizel"
	},

	illustrator: "OKUBO",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		en: "It spins its two tails like a screw to propel itself<br />through water. The tails also slice clinging<br />seaweed."
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
	
	boosters: [Dialga, Palkia]
}

export default card