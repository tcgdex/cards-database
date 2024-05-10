import { Card } from "../../../interfaces"
import Set from "../sv4s"

const card: Card = {
	set: Set,

	name: {
		id: "Elekid"
	},

	illustrator: "aoki",
	category: "Pokemon",
	hp: 30,
	types: ["Lightning"],

	description: {
		id: "Elekid masih belum pintar dalam menampung listrik. Pokémon ini menyelinap diam-diam ke rumah penduduk dan mencari soket listrik untuk memakan listrik."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Tembakan Berlistrik"
		},

		effect: {
			id: "Serangan ini memberikan kerusakan sejumlah 30 kepada 1 Pokémon lawan. [Kelemahan dan Resistansi Pokémon Cadangan tidak mempengaruhi jumlah kerusakan.]"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 0,
	regulationMark: "G"
}

export default card