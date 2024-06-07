import { Card } from "../../../interfaces"
import Set from "../SV4s"

const card: Card = {
	set: Set,

	name: {
		id: "Sandy Shocks ex"
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 220,
	types: ["Fighting"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			id: "Isapan Kekuatan Magnet"
		},

		effect: {
			id: "Dapat digunakan 1 kali pada giliran sendiri jika sisa Kartu Point lawan adalah 4 lembar atau kurang. Pilih 1 lembar Energi Dasar {Petarung} dari Trash sendiri, lalu kenakan pada Pokémon ini."
		}
	}],

	attacks: [{
		name: {
			id: "Ground Spike"
		},

		effect: {
			id: "Pada giliran sendiri berikutnya, Pokémon ini tidak dapat menggunakan serangan."
		},

		damage: 200,
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card