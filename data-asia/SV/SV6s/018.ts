import { Card } from "../../../interfaces"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		id: "Dipplin"
	},

	illustrator: "Saboteri",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	description: {
		id: "Boah luar yang mengeluarkan kepala dan Boah dalam yang mengeluarkan ekor saling membantu dan tinggal bersama di dalam apel."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			id: "Orkes Festival"
		},

		effect: {
			id: "Jika ada Lokasi Festival di Arena, Pokémon ini dapat menggunakan serangan yang dimiliki 2 kali berturut-turut. (Jika Pokémon Bertarung lawan KO akibat serangan pertama, gunakan serangan kedua setelah Pokémon Bertarung berikutnya masuk.)"
		}
	}],

	attacks: [{
		name: {
			id: "Lingkaran Teman"
		},

		effect: {
			id: "Serangan ini memberikan kerusakan sejumlah 20 untuk tiap Pokémon Cadangan sendiri."
		},

		damage: "20×",
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card