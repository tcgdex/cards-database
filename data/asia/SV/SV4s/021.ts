import { Card } from "../../../interfaces"
import Set from "../SV4s"

const card: Card = {
	set: Set,

	name: {
		id: "Camerupt"
	},

	illustrator: "satoma",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],

	description: {
		id: "Camerupt hidup di kawah gunung berapi. Punuk di punggungnya terkenal mengeluarkan erupsi besar setiap 10 tahun sekali."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			id: "Api Penghangus"
		},

		effect: {
			id: "Ubah kondisi Pokémon Bertarung lawan menjadi Luka Bakar."
		},

		cost: ["Fire"]
	}, {
		name: {
			id: "Meriam Batu Letusan"
		},

		effect: {
			id: "Pemain dapat memilih 1 Energi {Petarung} yang dikenakan pada Pokémon ini, lalu membuangnya ke Trash. Jika dilakukan, kerusakan yang diberikan bertambah sejumlah 120."
		},

		damage: "120+",
		cost: ["Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card