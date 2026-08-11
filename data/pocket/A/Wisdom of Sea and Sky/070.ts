import { Card } from "models/database/card"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Elekid",
		'fr-fr': "Élekid"
	},

	illustrator: "Miki Tanaka",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [239],
	hp: 30,
	types: ["Lightning"],

	description: {
		'en-us': "When a storm approaches, this Pokémon gets\nrestless. Once Elekid hears the sound of thunder,\nit gets full-on rowdy.",
		'fr-fr': "Il ne tient plus en place quand un orage approche. Lorsqu'il entend le tonnerre gronder, il devient tout excité."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Zappy Shot",
			'fr-fr': "Coup qui Pique"
		},

		effect: {
			'en-us': "This attack does 20 damage to 1 of your opponent's Benched Pokémon.",
			'fr-fr': "Cette attaque inflige 20 dégâts à un des Pokémon de Banc de votre adversaire."
		}
	}],

	weaknesses: [{
		type: "Colorless",
		value: "+20"
	}],

	retreat: 0,
	boosters: ["lugia"]
}

export default card