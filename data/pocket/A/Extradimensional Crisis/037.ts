import { Card } from "models/database/card"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Alolan Meowth",
		'fr-fr': "Miaouss d'Alola"
	},

	illustrator: "Sekio",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [52],
	hp: 60,
	types: ["Darkness"],

	description: {
		'en-us': "It's accustomed to luxury because it\nused to live with Alolan royalty. As a\nresult, it's very picky about food.",
		'fr-fr': "Par le passé, il menait une vie de luxe auprès de la famille royale d'Alola, et il en a gardé des goûts alimentaires très sélectifs."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Meddle",
			'fr-fr': "Intrusion"
		},

		cost: ["Darkness"],

		effect: {
			'en-us': "Discard a random Pokémon Tool card from your opponent's hand.",
			'fr-fr': "Défaussez au hasard une carte Outil Pokémon de la main de votre adversaire."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1
}

export default card