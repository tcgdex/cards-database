import { Card } from "models/database/card"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Krabby",
		'fr-fr': "Krabby"
	},

	illustrator: "Shigenori Negishi",
	rarity: "One Shiny",
	category: "Pokemon",

	dexId: [98],
	hp: 70,
	types: ["Water"],

	description: {
		'en-us': "It can be found near the sea. The large pincers\ngrow back if they are torn out of their sockets.",
		'fr-fr': "On trouve ce Pokémon près de la mer. Ses grosses pinces peuvent repousser si elles sont arrachées."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Vise Grip",
			'fr-fr': "Force Poigne"
		},

		damage: 40,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2
}

export default card