import { Card } from "models/database/card"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Trevenant",
		'fr-fr': "Desséliande"
	},

	illustrator: "Kouki Saitou",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [709],
	hp: 120,
	types: ["Psychic"],

	evolveFrom: {
		'en-us': "Phantump"
	},

	description: {
		'en-us': "People fear it due to a belief that it devours any\nwho try to cut down trees in its forest, but to the\nPokémon it shares its woods with, it's kind.",
		'fr-fr': "Les bûcherons qui viennent couper des arbres en forêt ont peur d'être dévorés par Desséliande. Il est gentil avec les Pokémon habitant les bois."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Wrack Down",
			'fr-fr': "Réduire en Poussière"
		},

		damage: 70,
		cost: ["Psychic", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 2
}

export default card