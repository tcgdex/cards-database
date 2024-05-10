import { Card } from "../../../interfaces"
import Set from "../sv3s"

const card: Card = {
	set: Set,

	name: {
		id: "Houndoom"
	},

	illustrator: "Haru Akasaka",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],

	description: {
		id: "Jika menerima luka bakar akibat semburan api Houndoom, luka tersebut akan terus sakit sampai kapan pun."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			id: "Menyerang Gagah Berani"
		},

		effect: {
			id: "Jika Pokémon Bertarung lawan adalah Pokémon Evolusi, kerusakan yang diberikan bertambah sejumlah 70."
		},

		damage: "50+",
		cost: ["Darkness", "Colorless"]
	}, {
		name: {
			id: "Shadow Slash"
		},

		effect: {
			id: "Pilih 1 Energi yang dikenakan pada Pokémon ini, lalu buang ke Trash."
		},

		damage: 130,
		cost: ["Darkness", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card