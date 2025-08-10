import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Magikarp"
	},

	illustrator: "Shigenori Negishi",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 30,
	types: ["Water"],

	description: {
		en: "An underpowered, pathetic Pokémon. It may\njump high on rare occasions but never more\nthan seven feet."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Splashing Dodge"
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

	retreat: 1,
	boosters: ["lugia"]
}

export default card