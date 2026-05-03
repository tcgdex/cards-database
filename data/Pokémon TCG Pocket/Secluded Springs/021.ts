import { Card } from "../../../interfaces"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		en: "Feebas",
		fr: "Barpau"
	},

	illustrator: "Suwama Chiaki",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [349],
	hp: 30,
	types: ["Water"],

	description: {
		en: "Although unattractive and unpopular, this\nPokémon's marvelous vitality has made it a\nsubject of research.",
		fr: "Comme il est tout de même franchement laid, ce Pokémon a un succès très mitigé. Sa grande vitalité fait néanmoins l'objet de moult études."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Leap Out",
			fr: "Bondir"
		},

		cost: ["Water"],

		effect: {
			en: "Switch this Pokémon with 1 of your Benched Pokémon.",
			fr: "Échangez ce Pokémon contre l'un de vos Pokémon de Banc."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card