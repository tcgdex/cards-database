import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		en: "Chinchou"
	},

	illustrator: "Aya Kusube",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [170],
	hp: 60,
	types: ["Lightning"],

	description: {
		en: "Its antennae, which evolved from a fin, have both\npositive and negative charges flowing through them."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Luring Glow"
		},

		cost: ["Lightning"],

		effect: {
			en: "Flip a coin. If heads, switch in 1 of your opponent's Benched Pokémon to the Active Spot."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card