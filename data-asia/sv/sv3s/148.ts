import { Card } from "../../../interfaces"
import Set from "../sv3s"

const card: Card = {
	set: Set,

	name: {
		id: "Oinkologne"
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],

	description: {
		id: "Oinkologne menyebarkan wangi semerbak layaknya bunga. Otot kakinya yang telah berkembang membuat Pokémon ini melompat setinggi lebih dari 5 meter dengan mudahnya."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			id: "Pilihan Terbaik"
		},

		effect: {
			id: "Lempar koin 3 kali. Pilih kartu sesukanya dari Trash sendiri paling banyak sejumlah lemparan dengan hasil sisi depan, perlihatkan ke lawan, lalu tambahkan ke Kartu Pegangan."
		},

		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			id: "Perfume Press"
		},

		effect: {
			id: "Ubah kondisi Pokémon Bertarung lawan menjadi Pusing."
		},

		damage: 70,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card