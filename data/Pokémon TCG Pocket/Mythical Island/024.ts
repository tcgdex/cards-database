import { Card } from "../../../interfaces"
import Set from "../Mythical Island"

const card: Card = {
	set: Set,

	name: {
		en: "Cramorant"
	},

	illustrator: "Jerky",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],

	description: {
		en: "It's so strong that it can knock out some opponents in a single hit, but it also may forget what it's battling midfight."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Dive"
		},

		damage: 60,
		cost: ["Water", "Water", "Colorless"],

		effect: {
			en: "Flip a coin. If heads, during your opponent's next turn, prevent all damage from—and effects of—attacks done to this Pokémon."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond"
}

export default card
