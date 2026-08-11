import { Card } from "../../../interfaces"
import Set from "../SV4s"

const card: Card = {
	set: Set,

	name: {
		id: "Zebstrika"
	},

	illustrator: "GOSSAN",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],

	description: {
		id: "Pokémon ini memiliki kecepatan seketika yang secepat kilat. Ketika Zebstrika berlari dengan kecepatan penuh, suara guntur bergema ke sekelilingnya."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			id: "Ringkikan Meletus"
		},

		effect: {
			id: "Pilih Energi Dasar {Listrik} dari Trash sendiri paling banyak sejumlah Kartu Point yang telah diambil lawan, lalu kenakan sesukanya pada Pokémon sendiri."
		},

		cost: ["Lightning"]
	}, {
		name: {
			id: "Guntur"
		},

		effect: {
			id: "Pokémon ini juga menerima kerusakan sejumlah 50."
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