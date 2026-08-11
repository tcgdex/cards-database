import { Card } from "models/database/card"
import Set from "../SV4s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Simipour"
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],

	description: {
		'id-id': "Simipour menyukai tempat yang airnya bersih. Jika air yang ditampung di kepalanya berkurang, Pokémon ini akan mengisinya kembali dengan menyedot air menggunakan ekornya."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'id-id': "Monkey Trio"
		},

		effect: {
			'id-id': "Jika ada Simisage, Simisear, dan Simipour di Arena sendiri, Pokémon ini menjadi tidak membutuhkan Energi {Bening} untuk menggunakan serangan."
		}
	}],

	attacks: [{
		name: {
			'id-id': "Mengguyur Memandikan"
		},

		effect: {
			'id-id': "Serangan ini juga memberikan kerusakan masing-masing sejumlah 30 kepada semua Pokémon Cadangan lawan. [Kelemahan dan Resistansi Pokémon Cadangan tidak mempengaruhi jumlah kerusakan.]"
		},

		damage: 50,
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