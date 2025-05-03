import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Slowpoke"
	},

	illustrator: "Miki Tanaka",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			en: "Tail Whap"
		},

		damage: "30"
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 2,
	rarity: "One Diamond",

	description: {
		en: "It is incredibly slow and dopey. It takes five seconds for it to feel pain when under attack.",
	}
}

export default card
