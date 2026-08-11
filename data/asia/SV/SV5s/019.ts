import { Card } from "models/database/card"
import Set from "../SV5s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Dhelmise"
	},

	illustrator: "Saya Tsuruta",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],

	description: {
		'id-id': "Dhelmise adalah ganggang yang mengambang di dasar laut, menempel dan mengambil alih bagian dari kapal karam, lalu terlahir kembali sebagai Pokémon hantu."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Serangan Berputar"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'id-id': "Steel Anchor"
		},

		effect: {
			'id-id': "Jika ada Pokémon {Logam} di Cadangan sendiri, kerusakan yang diberikan bertambah sejumlah 80."
		},

		damage: "80+",
		cost: ["Grass", "Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card