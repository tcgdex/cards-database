import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Articuno"
	},

	illustrator: "Hitoshi Ariga",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water", "Water", "Colorless"],

		name: {
			en: "Ice Beam"
		},

		effect: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed"
		},

		damage: "60"
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	rarity: "Three Diamond",

	description: {
		en: "It's said that this Pokémon's beautiful blue wings are made of ice. Articuno flies over snowy mountains, its long tail fluttering along behind it.",
	}
}

export default card
