import { Card } from "../../../interfaces"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		id: "Glimmora"
	},

	illustrator: "Kazumasa Yasukuni",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	description: {
		id: "Belakangan ini diketahui bahwa kelopak bunga energi racun Glimmora yang mengkristal mirip dengan Permata Terastal."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			id: "Racun Syaraf"
		},

		effect: {
			id: "Lempar koin 1 kali. Jika hasilnya sisi depan, ubah kondisi Pokémon Bertarung lawan menjadi Racun dan Lumpuh."
		},

		cost: ["Colorless"]
	}, {
		name: {
			id: "Venoshock"
		},

		effect: {
			id: "Jika Pokémon Bertarung lawan mengalami kondisi Racun, kerusakan yang diberikan bertambah sejumlah 100."
		},

		damage: "30+",
		cost: ["Fighting"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card