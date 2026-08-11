import { Card } from "../../../interfaces"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		id: "Garchomp ex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 320,
	types: ["Water"],
	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		name: {
			id: "Hydro Lander"
		},

		effect: {
			id: "Pilih paling banyak 3 lembar Energi Dasar {Petarung} dari Trash sendiri, lalu kenakan sesukanya pada Pokémon Cadangan."
		},

		damage: 160,
		cost: ["Fighting"]
	}, {
		name: {
			id: "Sonic Dive"
		},

		effect: {
			id: "Buang 2 Energi yang dikenakan pada Pokémon ini ke Trash, serangan ini memberikan kerusakan sejumlah 120 kepada 1 Pokémon lawan. [Kelemahan dan Resistansi Pokémon Cadangan tidak mempengaruhi jumlah kerusakan.]"
		},

		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 0,
	regulationMark: "G"
}

export default card