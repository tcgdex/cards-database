import { Card } from "../../../interfaces"
import Set from "../SV5s"

const card: Card = {
	set: Set,

	name: {
		id: "Wugtrio ex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 250,
	types: ["Lightning"],
	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			id: "Tricolor Pump"
		},

		effect: {
			id: "Buang paling banyak 3 lembar Energi dari Kartu Pegangan sendiri ke Trash, serangan ini memberikan kerusakan sejumlah 60 untuk tiap lembarnya kepada 1 Pokémon lawan. [Kelemahan dan Resistansi Pokémon Cadangan tidak mempengaruhi jumlah kerusakan.]"
		},

		cost: ["Water"]
	}, {
		name: {
			id: "Pitingan Pelumpuh"
		},

		effect: {
			id: "Pada giliran lawan berikutnya, Pokémon yang menerima serangan ini tidak dapat Mundur."
		},

		damage: 120,
		cost: ["Water", "Water"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card