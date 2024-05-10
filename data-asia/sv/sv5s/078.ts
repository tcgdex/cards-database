import { Card } from "../../../interfaces"
import Set from "../sv5s"

const card: Card = {
	set: Set,

	name: {
		id: "Mudsdale"
	},

	illustrator: "Naoyo Kimura",
	category: "Pokemon",
	hp: 150,
	types: ["Fighting"],

	description: {
		id: "Tidak hanya membantu pekerjaan kasar, Mudsdale dirawat dengan baik karena menghasilkan lumpur berkualitas bagus untuk bahan membuat tembikar."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			id: "Mud Stock"
		},

		effect: {
			id: "Kenakan Energi Dasar {Petarung} masing-masing 1 lembar dari Trash pada semua Pokémon Cadangan sendiri."
		},

		cost: ["Fighting"]
	}, {
		name: {
			id: "Daya Kuda Besar"
		},

		effect: {
			id: "Pokémon ini juga menerima kerusakan sejumlah 40."
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