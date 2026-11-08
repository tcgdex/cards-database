import { Card } from "models/database/card"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Ambipom"
	},

	illustrator: "KEIICHIRO ITO",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],

	description: {
		'id-id': "Karena ekornya yang terbagi 2 dapat terampil dalam melakukan berbagai macam hal, tangannya menjadi hampir tidak pernah digunakan."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'id-id': "Ekor Tega"
		},

		effect: {
			'id-id': "Dapat digunakan 1 kali pada giliran sendiri saat memasukkan kartu ini dari Kartu Pegangan untuk melakukan evolusi. Lempar koin 2 kali. Pilih kartu dari Kartu Pegangan lawan tanpa melihat sisi depan untuk tiap lemparan dengan hasil sisi depan, lihat sisi depan kartu tersebut, lalu kocok kembali ke Deck lawan."
		}
	}],

	attacks: [{
		name: {
			'id-id': "Menepuk"
		},

		damage: 100,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card