import { Card } from "../../../interfaces"
import Set from "../sv3s"

const card: Card = {
	set: Set,

	name: {
		id: "Espeon"
	},

	illustrator: "Cona Nitanda",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],

	description: {
		id: "Ujung ekor Espeon yang terbelah dua sedikit bergoyang ketika sedang membaca pergerakan lawan."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			id: "Psychodamage"
		},

		effect: {
			id: "Kerusakan yang diberikan bertambah sejumlah 10 untuk tiap Token Kerusakan yang dimiliki Pokémon Bertarung lawan."
		},

		damage: "30+",
		cost: ["Psychic"]
	}, {
		name: {
			id: "Psikokinesis"
		},

		effect: {
			id: "Lempar koin 1 kali. Jika hasilnya sisi depan, ubah kondisi Pokémon Bertarung lawan menjadi Lumpuh."
		},

		damage: 60,
		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card