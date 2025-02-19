import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Vulpix"
	},

	illustrator: "Toshinao Aoki",
	category: "Pokemon",
	hp: 50,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Tail Whip"
		},

		effect: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon can't attack during your opponent's next turn."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond",

	description: {
		en: "While young, it has six gorgeous tails. When it grows, several new tails are sprouted.",
	}
}

export default card
