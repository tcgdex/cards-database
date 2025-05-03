import { Card } from "../../../interfaces"
import Set from "../Shining Revelry"

const card: Card = {
	set: Set,

	name: {
		en: "Floatzel"
	},

	illustrator: "Kouki Saitou",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	evolveFrom: {
		en: "Buizel"
	},

	description: {
		en: "With its flotation sac inflated, it can carry people on its back. It deflates the sac before it dives."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Water Arrow"
		},

		cost: ["Water"],

		effect: {
			en: "This attack does 30 damage to 1 of your opponent's Pokémon."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card