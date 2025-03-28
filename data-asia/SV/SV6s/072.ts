import { Card } from "../../../interfaces"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		id: "Morpeko"
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],

	description: {
		id: "Karena kantong lambungnya kecil, Pokémon ini akan segera merasa lapar jika tidak selalu memakan biji yang dimasukkan di kantongnya."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			id: "Mencari Kudapan"
		},

		effect: {
			id: "Dapat digunakan 1 kali pada giliran sendiri. Lihat 1 kartu dari atas Deck sendiri, lalu kembalikan ke posisi semula. Pemain dapat membuang kartu tersebut ke Trash."
		}
	}],

	attacks: [{
		name: {
			id: "Memungut dan Mengenakan"
		},

		effect: {
			id: "Pilih paling banyak 2 lembar Energi Dasar dari Trash sendiri, lalu kenakan sesukanya pada Pokémon sendiri."
		},

		cost: ["Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card