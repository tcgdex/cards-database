import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Finneon"
	},

	illustrator: "Shigenori Negishi",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 50,
	types: ["Water"],

	description: {
		en: "The line running down its side can store sunlight. It shines vividly at night."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Elegant Swim"
		},

		damage: 10,
		cost: ["Water"],

		effect: {
			en: "Flip a coin. If heads, during your opponent's next turn, prevent all damage from—and effects of—attacks done to this Pokémon."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card
