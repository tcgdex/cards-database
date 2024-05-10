import { Card } from "../../../interfaces"
import Set from "../sv4s"

const card: Card = {
	set: Set,

	name: {
		id: "Espathra"
	},

	illustrator: "Teeziro",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	description: {
		id: "Espathra mengeluarkan kekuatan psikokinesis dari celah embel-embel warna-warninya, lalu berlari dengan kecepatan 200 km/jam."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			id: "Penglihatan Pemastian"
		},

		effect: {
			id: "Dapat digunakan 1 kali pada giliran sendiri saat memasukkan kartu ini dari Kartu Pegangan untuk melakukan evolusi. Hingga akhir giliran lawan berikutnya, Pokémon ini tidak menerima kerusakan dan efek akibat serangan dari Pokémon lawan."
		}
	}],

	attacks: [{
		name: {
			id: "Glitter Eyes"
		},

		effect: {
			id: "Jika ada Tulip di Trash sendiri, kerusakan yang diberikan bertambah sejumlah 70."
		},

		damage: "70+",
		cost: ["Psychic", "Psychic"]
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