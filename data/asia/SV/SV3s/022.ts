import { Card } from "models/database/card"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Lapras"
	},

	illustrator: "Gemi",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	description: {
		'id-id': "Lapras tahan dingin dan laut es pun tidak menjadi masalah baginya. Kulitnya mulus dan agak dingin."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Berbenam Dalam-dalam"
		},

		effect: {
			'id-id': "Pilih paling banyak 3 lembar Energi Dasar dari Trash sendiri, perlihatkan ke lawan, lalu tambahkan ke Kartu Pegangan."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'id-id': "Freeze-Dry"
		},

		effect: {
			'id-id': "Lempar koin 1 kali. Jika hasilnya sisi depan, ubah kondisi Pokémon Bertarung lawan menjadi Lumpuh."
		},

		damage: 50,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card