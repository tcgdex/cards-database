import { Card } from "models/database/card"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Pineco",
		'fr-fr': "Pomdepik"
	},

	illustrator: "Suwama Chiaki",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [204],
	hp: 60,
	types: ["Grass"],

	description: {
		'en-us': "It looks just like a pinecone. Its shell protects it\nfrom bird Pokémon that peck it by mistake.",
		'fr-fr': "Il ressemble à une pomme de pin. Sa carapace le protège des Pokémon Oiseaux qui le picorent par erreur."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Ram",
			'fr-fr': "Collision"
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