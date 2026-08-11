import { Card } from "../../../interfaces"
import Set from "../SV4s"

const card: Card = {
	set: Set,

	name: {
		id: "Wo-Chien"
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],

	description: {
		id: "Wo-Chien mengisap energi tumbuhan. Hutan sekeliling Pokémon ini langsung tandus dan sawah-sawah menjadi gersang."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Leaf Bring"
		},

		effect: {
			id: "Pilih paling banyak 2 lembar Energi Dasar {Daun} dari Trash sendiri, lalu kenakan pada 1 Pokémon sendiri."
		},

		cost: ["Grass"]
	}, {
		name: {
			id: "Ketamakan Mengikat"
		},

		effect: {
			id: "Pada giliran lawan berikutnya, Energi yang dibutuhkan oleh Pokémon yang menerima serangan ini untuk menggunakan serangan bertambah 2 Energi {Bening}."
		},

		damage: 140,
		cost: ["Grass", "Grass", "Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card