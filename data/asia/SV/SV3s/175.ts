import { Card } from "../../../interfaces"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		id: "Palafin"
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 150,
	types: ["Water"],

	description: {
		id: "Gen zaman purba Pokémon ini telah bangkit. Palafin memiliki tenaga super yang membuatnya dapat mengangkat kapal pesiar menggunakan satu siripnya dengan mudah."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			id: "Pukulan Jet"
		},

		effect: {
			id: "Serangan ini juga memberikan kerusakan sejumlah 30 kepada 1 Pokémon Cadangan lawan. [Kelemahan dan Resistansi Pokémon Cadangan tidak mempengaruhi jumlah kerusakan.]"
		},

		damage: 30,
		cost: ["Water"]
	}, {
		name: {
			id: "Justice Kick"
		},

		effect: {
			id: "Jika pada giliran ini, Pokémon ini tidak masuk dari Cadangan ke Arena Bertarung, serangan ini gagal."
		},

		damage: 210,
		cost: ["Water", "Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card