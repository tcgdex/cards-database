import { Card } from "models/database/card"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Houndoom"
	},

	illustrator: "Haru Akasaka",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],

	description: {
		'id-id': "Jika menerima luka bakar akibat semburan api Houndoom, luka tersebut akan terus sakit sampai kapan pun."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'id-id': "Menyerang Gagah Berani"
		},

		effect: {
			'id-id': "Jika Pokémon Bertarung lawan adalah Pokémon Evolusi, kerusakan yang diberikan bertambah sejumlah 70."
		},

		damage: "50+",
		cost: ["Darkness", "Colorless"]
	}, {
		name: {
			'id-id': "Shadow Slash"
		},

		effect: {
			'id-id': "Pilih 1 Energi yang dikenakan pada Pokémon ini, lalu buang ke Trash."
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