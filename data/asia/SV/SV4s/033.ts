import { Card } from "models/database/card"
import Set from "../SV4s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Milotic"
	},

	illustrator: "Atsuya Uki",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	description: {
		'id-id': "Kabarnya orang yang melihat wujud Milotic yang cantik akan tersembuhkan luka batinnya."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'id-id': "Memberi Pertolongan"
		},

		effect: {
			'id-id': "Dapat digunakan 1 kali pada giliran sendiri saat memasukkan kartu ini dari Kartu Pegangan untuk melakukan evolusi. Kedua pemain masing-masing memilih 1 lembar Pokémon Basic dari Trash sendiri, lalu memasukkannya ke Cadangan sendiri. (Lawan memasukkan ke Cadangan terlebih dahulu.)"
		}
	}],

	attacks: [{
		name: {
			'id-id': "Hypnosplash"
		},

		effect: {
			'id-id': "Ubah kondisi Pokémon Bertarung lawan menjadi Tidur."
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