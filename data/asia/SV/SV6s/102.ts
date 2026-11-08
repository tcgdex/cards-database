import { Card } from "models/database/card"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Probopass"
	},

	illustrator: "OKUBO",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],

	description: {
		'id-id': "Dikarenakan ia mengeluarkan daya magnet yang kuat, barang elektronik yang ada di dekatnya menjadi tidak bisa digunakan."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'id-id': "Assault Laser"
		},

		effect: {
			'id-id': "Jika Pokémon Bertarung lawan mengenakan Pokémon Tool, kerusakan yang diberikan bertambah sejumlah 80."
		},

		damage: "80+",
		cost: ["Colorless", "Colorless", "Colorless"]
	}, {
		name: {
			'id-id': "Land Crush"
		},

		damage: 120,
		cost: ["Fighting", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card