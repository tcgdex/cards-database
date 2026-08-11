import { Card } from "models/database/card"
import Set from "../SV4s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Iron Bundle"
	},

	illustrator: "Oswaldo KATO",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],

	description: {
		'id-id': "Pokémon yang mirip dengan objek misterius yang terdaftar dalam sebuah buku kuno. Hanya terdapat 2 laporan penampakan Pokémon ini."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'id-id': "Hyper Blower"
		},

		effect: {
			'id-id': "Dapat digunakan 1 kali pada giliran sendiri jika Pokémon ini ada di Cadangan. Tukar Pokémon Bertarung lawan dengan Pokémon Cadangan. (Pokémon yang akan dimasukkan ke Arena Bertarung dipilih oleh lawan.) Setelah itu, buang Pokémon ini dan semua kartu yang dikenakannya ke Trash."
		}
	}],

	attacks: [{
		name: {
			'id-id': "Jet Pendingin"
		},

		effect: {
			'id-id': "Pada giliran lawan berikutnya, Pokémon Evolusi yang menerima serangan ini tidak dapat menggunakan serangan."
		},

		damage: 80,
		cost: ["Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card