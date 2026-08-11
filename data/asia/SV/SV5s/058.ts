import { Card } from "models/database/card"
import Set from "../SV5s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Azumarill"
	},

	illustrator: "Makura Tami",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],

	description: {
		'id-id': "Telinga panjang Azumarill adalah sensor yang luar biasa. Dengan mendengar suara di dalam air, Pokémon ini mengetahui apa yang bergerak di situ."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'id-id': "Main Kasar"
		},

		effect: {
			'id-id': "Lempar koin 1 kali. Jika hasilnya sisi depan, kerusakan yang diberikan bertambah sejumlah 30."
		},

		damage: "30+",
		cost: ["Colorless"]
	}, {
		name: {
			'id-id': "Power Tackle"
		},

		effect: {
			'id-id': "Pada giliran sendiri berikutnya, Pokémon ini tidak dapat menggunakan serangan."
		},

		damage: 140,
		cost: ["Psychic", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card