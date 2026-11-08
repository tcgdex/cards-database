import { Card } from "models/database/card"
import Set from "../SV4s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Steelix"
	},

	illustrator: "nisimono",
	category: "Pokemon",
	hp: 180,
	types: ["Metal"],

	description: {
		'id-id': "Ada pemikiran bahwa perubahan pada tubuh Steelix terjadi akibat bertumpuknya unsur besi yang ditelan olehnya bersama tanah."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'id-id': "Gempa"
		},

		effect: {
			'id-id': "Serangan ini juga memberikan kerusakan masing-masing sejumlah 30 kepada semua Pokémon Cadangan sendiri. [Kelemahan dan Resistansi Pokémon Cadangan tidak mempengaruhi jumlah kerusakan.]"
		},

		damage: 130,
		cost: ["Metal"]
	}, {
		name: {
			'id-id': "Heavy Impact"
		},

		damage: 180,
		cost: ["Metal", "Metal", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 4,
	regulationMark: "G"
}

export default card