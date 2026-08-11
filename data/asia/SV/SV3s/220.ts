import { Card } from "../../../interfaces"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		id: "Charizard ex"
	},

	illustrator: "AKIRA EGAWA",
	category: "Pokemon",
	hp: 330,
	types: ["Darkness"],
	stage: "Stage2",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			id: "Dominasi Api Jahanam"
		},

		effect: {
			id: "Dapat digunakan 1 kali pada giliran sendiri saat memasukkan kartu ini dari Kartu Pegangan untuk melakukan evolusi. Pilih paling banyak 3 lembar Energi Dasar {Api} dari Deck sendiri, lalu kenakan sesukanya pada Pokémon sendiri. Kemudian, kocok Deck."
		}
	}],

	attacks: [{
		name: {
			id: "Burning Dark"
		},

		effect: {
			id: "Kerusakan yang diberikan bertambah sejumlah 30 untuk tiap lembar Kartu Point yang telah diambil lawan."
		},

		damage: "180+",
		cost: ["Fire", "Fire"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card