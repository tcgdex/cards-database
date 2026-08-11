import { Card } from "models/database/card"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Latios"
	},

	illustrator: "OKACHEKE",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	description: {
		'id-id': "Pokémon yang memiliki kecerdasan tinggi. Jika ia melipat lengannya dan terbang, kecepatannya melampaui pesawat jet."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Terbang Linear"
		},

		effect: {
			'id-id': "Serangan ini memberikan kerusakan sejumlah 50 kepada 1 Pokémon lawan. [Kelemahan dan Resistansi Pokémon Cadangan tidak mempengaruhi jumlah kerusakan.]"
		},

		cost: ["Psychic", "Colorless"]
	}, {
		name: {
			'id-id': "Jet Head"
		},

		damage: 110,
		cost: ["Psychic", "Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card