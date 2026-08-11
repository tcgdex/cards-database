import { Card } from "models/database/card"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Magikarp",
		'fr-fr': "Magicarpe"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "One Shiny",
	category: "Pokemon",

	dexId: [129],
	hp: 30,
	types: ["Water"],

	description: {
		'en-us': "An underpowered, pathetic Pokémon. It may\njump high on rare occasions but never more\nthan seven feet.",
		'fr-fr': "Un Pokémon tout à fait pathétique. En de très rares occasions, il est capable de sauter haut, mais jamais à plus de deux mètres."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Leap Out",
			'fr-fr': "Bondir"
		},

		cost: ["Water"],

		effect: {
			'en-us': "Switch this Pokémon with 1 of your Benched Pokémon.",
			'fr-fr': "Échangez ce Pokémon contre l'un de vos Pokémon de Banc."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["lugia"]
}

export default card