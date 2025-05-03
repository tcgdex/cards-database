import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Gligar"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],

	description: {
		en: "It usually clings to cliffs. When it spots its prey, it spreads its wings and glides down to attack."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Pierce"
		},

		damage: 20,
		cost: ["Fighting"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1
}

export default card
