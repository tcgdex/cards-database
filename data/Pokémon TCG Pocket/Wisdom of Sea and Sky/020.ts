import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Pineco",
		fr: "Pomdepik"
	},

	illustrator: "Suwama Chiaki",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [204],
	hp: 60,
	types: ["Grass"],

	description: {
		en: "It looks just like a pinecone. Its shell protects it\nfrom bird Pokémon that peck it by mistake.",
		fr: "Il ressemble à une pomme de pin. Sa carapace le protège des Pokémon Oiseaux qui le picorent par erreur."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Ram",
			fr: "Collision"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["ho-oh", "lugia"]
}

export default card