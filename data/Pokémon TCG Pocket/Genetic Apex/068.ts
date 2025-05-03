import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Krabby"
	},

	illustrator: "Tomokazu Komiya",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			en: "Vise Grip"
		},

		damage: "40"
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2,
	rarity: "One Diamond",

	description: {
		en: "It can be found near the sea. The large pincers grow back if they are torn out of their sockets.",
	}
}

export default card
