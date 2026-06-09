import { Card } from "../../../interfaces"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		en: "Blitzle",
		fr: "Zébibron"
	},

	illustrator: "Miki Tanaka",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [522],
	hp: 60,
	types: ["Lightning"],

	description: {
		en: "When thunderclouds cover the sky, it will appear.\nIt can catch lightning with its mane and store\nthe electricity.",
		fr: "Il apparaît quand le ciel est à l'orage. Il capte les éclairs avec sa crinière et accumule de l'électricité."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Rear Kick",
			fr: "Ruade"
		},

		damage: 40,
		cost: ["Lightning", "Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card