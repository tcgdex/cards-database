import { Card } from "../../../interfaces"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		en: "Inkay",
		fr: "Sepiatop"
	},

	illustrator: "miki kudo",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],

	description: {
		en: "It spins while making its luminescent spots flash.\nThese spots allow it to communicate with others\nby using different patterns of light.",
		fr: "Il fait clignoter son corps lumineux en tournoyant. Il communique avec ses congénères à l'aide de signaux de lumière."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Tackle",
			fr: "Charge"
		},

		damage: 20,
		cost: ["Darkness"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1
}

export default card