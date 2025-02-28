import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Stunfisk"
	},

	illustrator: "N-DESIGN Inc.",
	category: "Pokemon",
	hp: 110,
	types: ["Lightning"],

	description: {
		id: "Stunfisk tinggal di dataran lumpur. Berkat bakteri yang hidup di lumpur, organ untuk membuat listriknya jadi berkembang."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Pijar Pelumpuh"
		},

		effect: {
			id: "Lempar koin 1 kali. Jika hasilnya sisi depan, ubah kondisi Pokémon Bertarung lawan menjadi Lumpuh. Tambah lagi, pilih 1 Energi yang dikenakan pada Pokémon tersebut, lalu buang ke Trash."
		},

		damage: 50,
		cost: ["Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card