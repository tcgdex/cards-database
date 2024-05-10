import { Card } from "../../../interfaces"
import Set from "../sv5s"

const card: Card = {
	set: Set,

	name: {
		id: "Shaymin"
	},

	illustrator: "Atsushi Furusawa",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		id: "Shaymin memiliki kekuatan untuk mengurai unsur racun di udara dan mengubah daratan gersang menjadi ladang bunga dalam sekejap."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Pinpoint Dive"
		},

		effect: {
			id: "Serangan ini memberikan kerusakan sejumlah 60 kepada 1 Pokémon {ex}/{V} di Cadangan lawan. [Kelemahan dan Resistansi Pokémon Cadangan tidak mempengaruhi jumlah kerusakan.]"
		},

		cost: ["Grass"]
	}, {
		name: {
			id: "Tendangan Belakang"
		},

		damage: 50,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 0,
	regulationMark: "H"
}

export default card