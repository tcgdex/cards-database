import { Card } from "../../../interfaces"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		en: "Trevenant",
		fr: "Desséliande"
	},

	illustrator: "Kouki Saitou",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	evolveFrom: {
		en: "Phantump"
	},

	description: {
		en: "People fear it due to a belief that it devours any\nwho try to cut down trees in its forest, but to the\nPokémon it shares its woods with, it's kind.",
		fr: "Les bûcherons qui viennent couper des arbres en forêt ont peur d'être dévorés par Desséliande. Il est gentil avec les Pokémon habitant les bois."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Wrack Down",
			fr: "Réduire en Poussière"
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