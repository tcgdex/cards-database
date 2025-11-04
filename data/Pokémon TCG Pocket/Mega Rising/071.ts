import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Froakie"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		en: "It protects its skin by covering its body in\ndelicate bubbles. Beneath its happy-go-lucky air,\nit keeps a watchful eye on its surroundings."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Water Drip"
		},

		damage: 20,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card