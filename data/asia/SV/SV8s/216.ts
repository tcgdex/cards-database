import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Archaludon ex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 300,
	types: ["Metal"],
	stage: "Stage1",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			id: "Konstruksi Aloi"
		},

		effect: {
			id: "Dapat digunakan 1 kali pada giliran sendiri saat memasukkan kartu ini dari Kartu Pegangan untuk melakukan evolusi. Pilih paling banyak 2 lembar Energi Dasar {Logam} dari Trash sendiri, lalu kenakan sesukanya pada Pokémon {Logam} sendiri."
		}
	}],

	attacks: [{
		name: {
			id: "Metal Defender"
		},

		effect: {
			id: "Pada giliran lawan berikutnya, Pokémon ini menjadi tidak memiliki Kelemahan."
		},

		damage: 220,
		cost: ["Metal", "Metal", "Metal"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card