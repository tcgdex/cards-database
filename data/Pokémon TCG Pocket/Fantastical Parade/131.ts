import { Card } from "../../../interfaces"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	name: {
		en: "Lugia"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],

	description: {
		en: "It is said to be the guardian of the seas. It is\nrumored to have been seen on the night of a storm."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Aeroblast"
		},

		damage: 80,
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"],

		effect: {
			en: "Flip 2 coins. This attack does 40 more damage for each heads."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2
}

export default card