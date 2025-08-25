import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Octillery"
	},

	illustrator: "REND",
	rarity: "One Star",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],

	evolveFrom: {
		en: "Remoraid"
	},

	description: {
		en: "Its instinct is to bury itself in holes. It often steals\nthe nesting holes of others to sleep in them."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Octazooka"
		},

		damage: 50,
		cost: ["Water", "Water"],

		effect: {
			en: "If the Defending Pokémon tries to use an attack, your opponent flips a coin. If tails, that attack doesn't happen. This effect lasts until the Defending Pokémon leaves the Active Spot, and it doesn't stack."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["lugia"]
}

export default card