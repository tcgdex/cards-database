import { Card } from "../../../interfaces"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		id: "Tatsugiri"
	},

	illustrator: "Jerky",
	category: "Pokemon",
	hp: 70,
	types: ["Dragon"],

	description: {
		id: "Pokémon yang sangat licik. Tatsugiri pura-pura melemah untuk memancing mangsanya, lalu memerintah Pokémon rekannya untuk menyerang mangsa tersebut."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			id: "Memanggil Pelanggan"
		},

		effect: {
			id: "Dapat digunakan 1 kali pada giliran sendiri jika Pokémon ini ada di Arena Bertarung. Lihat 6 kartu dari atas Deck sendiri, pilih 1 lembar Supporter di antaranya, perlihatkan ke lawan, lalu tambahkan ke Kartu Pegangan. Kocok kembali sisa kartu ke Deck."
		}
	}],

	attacks: [{
		name: {
			id: "Berselancar"
		},

		damage: 50,
		cost: ["Fire", "Water"]
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card