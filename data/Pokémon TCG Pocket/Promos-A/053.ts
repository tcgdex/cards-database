import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		en: "Floatzel"
	},

	illustrator: "Shin Nagasawa",
	rarity: "None",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],

	description: {
		en: "With its flotation sac inflated, it can carry people on its back. It deflates the sac before it dives."
	},

	stage: "Stage1",

	evolveFrom: {
		en: "Buizel"
	},

	attacks: [{
		name: {
			en: "Attack the Wound"
		},

		cost: ["Water"],
		damage: "10+",

		effect: {
			en: "If your opponent’s Active Pokémon has damage on it, this attack does 60 more damage."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card
