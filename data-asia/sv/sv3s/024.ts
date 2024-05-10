import { Card } from "../../../interfaces"
import Set from "../sv3s"

const card: Card = {
	set: Set,

	name: {
		id: "Octillery"
	},

	illustrator: "Yuka Morii",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	description: {
		id: "Kepala batunya kukuh. Octillery mengikat lawan menggunakan kakinya yang dilengkapi dengan pengisap, lalu terus menghantam lawan tersebut dengan kepalanya."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			id: "Pengisap Pengambil"
		},

		effect: {
			id: "Dapat digunakan 1 kali pada giliran sendiri saat memasukkan kartu ini dari Kartu Pegangan untuk melakukan evolusi. Ambil 3 kartu dari atas Deck sendiri."
		}
	}],

	attacks: [{
		name: {
			id: "Peluru Tirai Asap"
		},

		effect: {
			id: "Pada giliran lawan berikutnya, saat Pokémon yang menerima serangan ini menggunakan serangan, lawan melempar koin 1 kali. Jika hasilnya sisi belakang, serangan tersebut gagal."
		},

		damage: 60,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card