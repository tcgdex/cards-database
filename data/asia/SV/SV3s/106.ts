import { Card } from "models/database/card"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Houndour"
	},

	illustrator: "Scav",
	category: "Pokemon",
	hp: 50,
	types: ["Darkness"],

	description: {
		'id-id': "Houndour memiliki kecerdasan untuk berburu sambil berkomunikasi dengan kawanannya menggunakan raungan yang berbeda."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Kerja Tim Gerombolan"
		},

		effect: {
			'id-id': "Kenakan Energi Dasar {Kegelapan} masing-masing 1 lembar dari Deck pada semua Houndour di Cadangan sendiri. Kemudian, kocok Deck."
		},

		cost: ["Darkness"]
	}, {
		name: {
			'id-id': "Taring Tenaga Dalam"
		},

		effect: {
			'id-id': "Lempar koin 1 kali. Jika hasilnya sisi belakang, serangan ini gagal."
		},

		damage: 30,
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card