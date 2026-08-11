import { Card } from "models/database/card"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Gliscor"
	},

	illustrator: "GOSSAN",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	description: {
		'id-id': "Gliscor terbang di udara tanpa suara. Pokémon ini menangkap mangsa menggunakan ekornya yang panjang, lalu menusuk kelemahan mangsa menggunakan taringnya."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'id-id': "Melubangi"
		},

		damage: 40,
		cost: ["Colorless"]
	}, {
		name: {
			'id-id': "Jarum Toksik"
		},

		effect: {
			'id-id': "Lempar koin 1 kali. Jika hasilnya sisi depan, ubah kondisi Pokémon Bertarung lawan menjadi Racun. Jumlah Token Kerusakan yang diletakkan akibat kondisi Racun ini adalah 2."
		},

		damage: 80,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card