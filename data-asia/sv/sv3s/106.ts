import { Card } from "../../../interfaces"
import Set from "../sv3s"

const card: Card = {
	set: Set,

	name: {
		id: "Houndour"
	},

	illustrator: "Scav",
	category: "Pokemon",
	hp: 50,
	types: ["Darkness"],

	description: {
		id: "Houndour memiliki kecerdasan untuk berburu sambil berkomunikasi dengan kawanannya menggunakan raungan yang berbeda."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Kerja Tim Gerombolan"
		},

		effect: {
			id: "Kenakan Energi Dasar {Kegelapan} masing-masing 1 lembar dari Deck pada semua Houndour di Cadangan sendiri. Kemudian, kocok Deck."
		},

		cost: ["Darkness"]
	}, {
		name: {
			id: "Taring Tenaga Dalam"
		},

		effect: {
			id: "Lempar koin 1 kali. Jika hasilnya sisi belakang, serangan ini gagal."
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