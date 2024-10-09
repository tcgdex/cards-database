import { Card } from "../../../interfaces"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		id: "Ogerpon Topeng Teal ex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 210,
	types: ["Grass"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			id: "Tarian Teal"
		},

		effect: {
			id: "Dapat digunakan 1 kali pada giliran sendiri. Pilih 1 lembar Energi Dasar {Daun} dari Kartu Pegangan sendiri, lalu kenakan pada Pokémon ini. Setelah itu, ambil 1 kartu dari atas Deck sendiri."
		}
	}],

	attacks: [{
		name: {
			id: "Hujan Ribuan Daun"
		},

		effect: {
			id: "Kerusakan yang diberikan bertambah sejumlah 30 untuk tiap Energi yang dikenakan pada Pokémon Bertarung kedua pemain."
		},

		damage: "30+",
		cost: ["Grass", "Grass", "Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card