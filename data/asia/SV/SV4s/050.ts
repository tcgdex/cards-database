import { Card } from "models/database/card"
import Set from "../SV4s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Zebstrika"
	},

	illustrator: "GOSSAN",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],

	description: {
		'id-id': "Pokémon ini memiliki kecepatan seketika yang secepat kilat. Ketika Zebstrika berlari dengan kecepatan penuh, suara guntur bergema ke sekelilingnya."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'id-id': "Ringkikan Meletus"
		},

		effect: {
			'id-id': "Pilih Energi Dasar {Listrik} dari Trash sendiri paling banyak sejumlah Kartu Point yang telah diambil lawan, lalu kenakan sesukanya pada Pokémon sendiri."
		},

		cost: ["Lightning"]
	}, {
		name: {
			'id-id': "Guntur"
		},

		effect: {
			'id-id': "Pokémon ini juga menerima kerusakan sejumlah 50."
		},

		damage: 150,
		cost: ["Lightning", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card