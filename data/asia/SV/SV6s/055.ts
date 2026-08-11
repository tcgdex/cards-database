import { Card } from "models/database/card"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Phione"
	},

	illustrator: "aspara",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		'id-id': "Ketika suhu air laut naik, Phione menggelembungkan kantong apung di kepalanya dan mengapung dalam kelompok di permukaan laut."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Memanggil Mendekat"
		},

		effect: {
			'id-id': "Pilih 1 lembar Supporter dari Trash sendiri, perlihatkan ke lawan, lalu tambahkan ke Kartu Pegangan."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'id-id': "Tekanan Energi"
		},

		effect: {
			'id-id': "Serangan ini memberikan kerusakan sejumlah 20 untuk tiap Energi yang dikenakan pada Pokémon Bertarung lawan."
		},

		damage: "20×",
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card