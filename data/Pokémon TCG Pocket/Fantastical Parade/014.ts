import { Card } from "../../../interfaces"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	name: {
		en: "Buzzwole"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],

	description: {
		en: "Buzzwole goes around showing off its\nabnormally swollen muscles. It is one kind\nof Ultra Beast."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Ground Beat"
		},

		damage: 40,
		cost: ["Grass", "Grass"],

		effect: {
			en: "If your opponent has gotten exactly 1 points, this attack does 40 more damage."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2
}

export default card