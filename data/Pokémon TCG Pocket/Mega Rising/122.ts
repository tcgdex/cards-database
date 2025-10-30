import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Sandshrew"
	},

	illustrator: "Sekio",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],

	description: {
		en: "It burrows into the ground to create its nest. If\nhard stones impede its tunneling, it uses its sharp\nclaws to shatter them and then carries on digging."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Sand Spray"
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