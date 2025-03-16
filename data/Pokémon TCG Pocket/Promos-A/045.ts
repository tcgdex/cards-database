import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		en: "Nosepass"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "None",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],

	description: {
		en: "It moves less than an inch a year, but when it's in a jam, it will spin and drill down into the ground in a split second."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Iron Defense"
		},

		cost: ["Colorless", "Colorless"],

		effect: {
			en: "Flip a coin. If heads, during your opponent's next turn, prevent all damage done to this Pokémon by attacks."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1
}

export default card
