import { Card } from "../../../interfaces"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		en: "Carvanha",
		fr: "Carvanha"
	},

	illustrator: "Hideki Ishikawa",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [318],
	hp: 60,
	types: ["Water"],

	description: {
		en: "It won't attack while it's alone—not even if it\nspots prey. Instead, it waits for other Carvanha to\njoin it, and then the Pokémon attack as a group.",
		fr: "Il ne s'attaque jamais à une proie tout seul, préférant attendre l'arrivée de ses congénères pour lancer l'assaut."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Bite",
			fr: "Morsure"
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