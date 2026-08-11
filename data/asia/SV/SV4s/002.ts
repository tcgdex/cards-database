import { Card } from "../../../interfaces"
import Set from "../SV4s"

const card: Card = {
	set: Set,

	name: {
		id: "Masquerain"
	},

	illustrator: "kantaro",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],

	description: {
		id: "Masquerain menjadi tidak dapat terbang jika antena pola bola mata uniknya menjadi berat akibat dibasahi oleh hujan."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			id: "Mata Represi"
		},

		effect: {
			id: "Lempar koin hingga hasilnya sisi belakang. Pilih Energi yang dikenakan pada Pokémon Bertarung lawan untuk tiap lemparan dengan hasil sisi depan, lalu kocok kembali ke Deck lawan."
		},

		cost: ["Grass"]
	}, {
		name: {
			id: "Cutter Wind"
		},

		damage: 70,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card