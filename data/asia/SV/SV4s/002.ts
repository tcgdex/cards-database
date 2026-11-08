import { Card } from "models/database/card"
import Set from "../SV4s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Masquerain"
	},

	illustrator: "kantaro",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],

	description: {
		'id-id': "Masquerain menjadi tidak dapat terbang jika antena pola bola mata uniknya menjadi berat akibat dibasahi oleh hujan."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'id-id': "Mata Represi"
		},

		effect: {
			'id-id': "Lempar koin hingga hasilnya sisi belakang. Pilih Energi yang dikenakan pada Pokémon Bertarung lawan untuk tiap lemparan dengan hasil sisi depan, lalu kocok kembali ke Deck lawan."
		},

		cost: ["Grass"]
	}, {
		name: {
			'id-id': "Cutter Wind"
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