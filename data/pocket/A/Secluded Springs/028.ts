import { Card } from "models/database/card"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Eelektross",
		'fr-fr': "Ohmassacre"
	},

	illustrator: "tetsuya koizumi",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [604],
	hp: 150,
	types: ["Lightning"],

	evolveFrom: {
		'en-us': "Eelektrik"
	},

	description: {
		'en-us': "They crawl out of the ocean using their arms.\nThey will attack prey on shore and immediately\ndrag it into the ocean.",
		'fr-fr': "Il peut sortir de l'eau à la force de ses bras pour attaquer des proies sur la rive et les entraîner avec lui dans l'eau en un instant."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'en-us': "Wild Charge",
			'fr-fr': "Éclair Fou"
		},

		damage: 120,
		cost: ["Lightning", "Lightning", "Colorless"],

		effect: {
			'en-us': "This Pokémon also does 20 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 20 dégâts."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 3
}

export default card