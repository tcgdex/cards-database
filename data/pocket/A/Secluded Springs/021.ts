import { Card } from "models/database/card"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Feebas",
		'fr-fr': "Barpau"
	},

	illustrator: "Suwama Chiaki",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [349],
	hp: 30,
	types: ["Water"],

	description: {
		'en-us': "Although unattractive and unpopular, this\nPokémon's marvelous vitality has made it a\nsubject of research.",
		'fr-fr': "Comme il est tout de même franchement laid, ce Pokémon a un succès très mitigé. Sa grande vitalité fait néanmoins l'objet de moult études."
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

	retreat: 1
}

export default card