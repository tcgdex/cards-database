import { Card } from "../../../interfaces"
import Set from "../sv3s"

const card: Card = {
	set: Set,

	name: {
		id: "Malamar"
	},

	illustrator: "Nelnal",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],

	description: {
		id: "Dikatakan bahwa kekuatan hipnosis Malamar berperan dalam kasus besar yang mengubah sejarah."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			id: "Psychovision"
		},

		effect: {
			id: "Dapat digunakan 1 kali pada giliran sendiri. Lihat 1 kartu dari atas Deck lawan, lalu kembalikan ke posisi semula. Setelah itu, lihat 1 kartu dari atas Deck sendiri, lalu kembalikan ke posisi semula."
		}
	}],

	attacks: [{
		name: {
			id: "Sinar Hipnotis"
		},

		effect: {
			id: "Ubah kondisi Pokémon Bertarung lawan menjadi Tidur."
		},

		damage: 90,
		cost: ["Darkness", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card