import { Card } from "models/database/card"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Shiinotic"
	},

	illustrator: "matazo",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],

	description: {
		'id-id': "Shiinotic memikat mangsa menggunakan cahaya sporanya yang berkedip-kedip dan membuat mangsanya tidur. Pokémon ini mengisap vitalitas mangsa menggunakan ujung jarinya."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'id-id': "Cahaya Ketenangan"
		},

		effect: {
			'id-id': "Dapat digunakan 1 kali pada giliran sendiri jika Pokémon ini ada di Arena Bertarung. Ubah kondisi Pokémon Bertarung lawan menjadi Tidur."
		}
	}],

	attacks: [{
		name: {
			'id-id': "Spiral Rush"
		},

		effect: {
			'id-id': "Lempar koin hingga hasilnya sisi belakang. Kerusakan yang diberikan bertambah sejumlah 30 untuk tiap lemparan dengan hasil sisi depan."
		},

		damage: "60+",
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card