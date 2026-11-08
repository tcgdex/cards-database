import { Card } from "models/database/card"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Lycanroc ex",
		'fr-fr': "Lougaroc-ex"
	},

	illustrator: "PLANETA CG Works",
	rarity: "Four Diamond",
	category: "Pokemon",

	dexId: [745],
	hp: 150,
	types: ["Fighting"],

	evolveFrom: {
		'en-us': "Rockruff"
	},

	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			'en-us': "Lycanfang",
			'fr-fr': "Lougacroc"
		},

		damage: 130,
		cost: ["Fighting", "Fighting", "Colorless"],

		effect: {
			'en-us': "Discard a {F} Energy from this Pokémon.",
			'fr-fr': "Défaussez une Énergie {F} de ce Pokémon."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 2
}

export default card
