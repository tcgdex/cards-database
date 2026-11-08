import { Card } from "models/database/card"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Spearow",
		'fr-fr': "Piafabec"
	},

	illustrator: "tetsuya koizumi",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [21],
	hp: 70,
	types: ["Colorless"],

	description: {
		'en-us': "Its reckless nature leads it to stand up to\nothers—even large Pokémon—if it has to protect\nits territory.",
		'fr-fr': "Un Pokémon téméraire qui n'hésite pas à affronter des Pokémon plus gros que lui pour protéger son territoire."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Glide",
			'fr-fr': "Glissement"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["ho-oh"]
}

export default card