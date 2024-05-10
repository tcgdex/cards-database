import { Card } from "../../../interfaces"
import Set from "../sv4s"

const card: Card = {
	set: Set,

	name: {
		id: "Steelix"
	},

	illustrator: "nisimono",
	category: "Pokemon",
	hp: 180,
	types: ["Metal"],

	description: {
		id: "Ada pemikiran bahwa perubahan pada tubuh Steelix terjadi akibat bertumpuknya unsur besi yang ditelan olehnya bersama tanah."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			id: "Gempa"
		},

		effect: {
			id: "Serangan ini juga memberikan kerusakan masing-masing sejumlah 30 kepada semua Pokémon Cadangan sendiri. [Kelemahan dan Resistansi Pokémon Cadangan tidak mempengaruhi jumlah kerusakan.]"
		},

		damage: 130,
		cost: ["Metal"]
	}, {
		name: {
			id: "Heavy Impact"
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