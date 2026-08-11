import { Card } from "../../../interfaces"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		id: "Ogerpon Topeng Sumur ex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 210,
	types: ["Water"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			id: "Menangis Sesenggukan"
		},

		effect: {
			id: "Pada giliran lawan berikutnya, Pokémon yang menerima serangan ini tidak dapat Mundur."
		},

		damage: 20,
		cost: ["Colorless"]
	}, {
		name: {
			id: "Pompa Arus Deras"
		},

		effect: {
			id: "Pemain dapat memilih 3 Energi yang dikenakan pada Pokémon ini, lalu mengocoknya kembali ke Deck. Jika dilakukan, serangan ini juga memberikan kerusakan sejumlah 120 kepada 1 Pokémon Cadangan lawan. [Kelemahan dan Resistansi Pokémon Cadangan tidak mempengaruhi jumlah kerusakan.]"
		},

		damage: 100,
		cost: ["Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card