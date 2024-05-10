import { Card } from "../../../interfaces"
import Set from "../sv3s"

const card: Card = {
	set: Set,

	name: {
		id: "Togekiss"
	},

	illustrator: "Cona Nitanda",
	category: "Pokemon",
	hp: 150,
	types: ["Psychic"],

	description: {
		id: "Togekiss dikenal sebagai makhluk yang memberikan berkah dan digambarkan sebagai pembawa keberuntungan sejak zaman dahulu."
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			id: "Precious Gift"
		},

		effect: {
			id: "Dapat digunakan 1 kali pada akhir giliran sendiri. Ambil kartu dari atas Deck hingga jumlah Kartu Pegangan sendiri menjadi 8 lembar."
		}
	}],

	attacks: [{
		name: {
			id: "Power Cyclone"
		},

		effect: {
			id: "Pilih 1 Energi yang dikenakan pada Pokémon ini, lalu pindahkan ke Pokémon Cadangan."
		},

		damage: 110,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 0,
	regulationMark: "G"
}

export default card