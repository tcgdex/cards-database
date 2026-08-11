import { Card } from "models/database/card"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Hydreigon ex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 330,
	types: ["Darkness"],
	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		name: {
			'id-id': "Crush Head"
		},

		effect: {
			'id-id': "Buang 3 kartu dari atas Deck lawan ke Trash."
		},

		damage: 200,
		cost: ["Darkness", "Colorless"]
	}, {
		name: {
			'id-id': "Obsidian"
		},

		effect: {
			'id-id': "Serangan ini juga memberikan kerusakan masing-masing sejumlah 130 kepada 2 Pokémon Cadangan lawan. [Kelemahan dan Resistansi Pokémon Cadangan tidak mempengaruhi jumlah kerusakan.]"
		},

		damage: 130,
		cost: ["Psychic", "Darkness", "Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card