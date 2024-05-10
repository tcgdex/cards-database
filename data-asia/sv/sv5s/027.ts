import { Card } from "../../../interfaces"
import Set from "../sv5s"

const card: Card = {
	set: Set,

	name: {
		id: "Victini"
	},

	illustrator: "Shibuzoh.",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	description: {
		id: "Pokémon pembawa kemenangan. Dikatakan bahwa pelatih yang membawa Victini selalu menang dalam pertarungan apa pun."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Mengibas-ngibas"
		},

		effect: {
			id: "Kocok kembali semua Kartu Pegangan sendiri ke Deck. Setelah itu, ambil 6 kartu dari atas Deck."
		},

		cost: ["Colorless"]
	}, {
		name: {
			id: "Bakar Jatuh"
		},

		effect: {
			id: "Pilih 1 Energi Spesial yang dikenakan pada Pokémon Bertarung lawan, lalu buang ke Trash."
		},

		damage: 30,
		cost: ["Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card