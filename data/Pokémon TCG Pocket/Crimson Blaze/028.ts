import { Card } from "../../../interfaces"
import Set from "../Crimson Blaze"

const card: Card = {
	set: Set,

	name: {
		en: "Helioptile"
	},

	illustrator: "Miki Tanaka",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		en: "The sun powers this Pokémon's electricity\ngeneration. Interruption of that process\nstresses Helioptile to the point of weakness."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Thunder Shock"
		},

		damage: 10,
		cost: ["Lightning"],

		effect: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card