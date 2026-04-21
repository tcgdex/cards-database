import { Card } from "../../../interfaces"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		en: "Slowpoke",
		fr: "Ramoloss"
	},

	illustrator: "Saya Tsuruta",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [79],
	hp: 60,
	types: ["Water"],

	description: {
		en: "It is incredibly slow and dopey. It takes five\nseconds for it to feel pain when under attack.",
		fr: "Ce Pokémon est très lent et apathique. Il lui faut cinq secondes pour ressentir la douleur provoquée par une attaque."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Water Gun",
			fr: "Pistolet à O"
		},

		damage: 20,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card