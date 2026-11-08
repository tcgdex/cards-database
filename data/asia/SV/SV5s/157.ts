import { Card } from "models/database/card"
import Set from "../SV5s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Mudsdale"
	},

	illustrator: "MINAMINAMI Take",
	category: "Pokemon",
	hp: 150,
	types: ["Fighting"],

	description: {
		'id-id': "Tidak hanya membantu pekerjaan kasar, Mudsdale dirawat dengan baik karena menghasilkan lumpur berkualitas bagus untuk bahan membuat tembikar."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'id-id': "Mud Stock"
		},

		effect: {
			'id-id': "Kenakan Energi Dasar {Petarung} masing-masing 1 lembar dari Trash pada semua Pokémon Cadangan sendiri."
		},

		cost: ["Fighting"]
	}, {
		name: {
			'id-id': "Daya Kuda Besar"
		},

		effect: {
			'id-id': "Pokémon ini juga menerima kerusakan sejumlah 40."
		},

		damage: 140,
		cost: ["Fighting", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card