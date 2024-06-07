import { Card } from "../../../interfaces"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		id: "Galvantula"
	},

	illustrator: "Taira Akitsu",
	category: "Pokemon",
	hp: 100,
	types: ["Lightning"],

	description: {
		id: "Galvantula mengincar anak burung yang belum dapat terbang dengan baik dan memasang jebakan menggunakan benang listrik di dekat sarang Pokémon burung."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			id: "Electric Bullet"
		},

		effect: {
			id: "Serangan ini juga memberikan kerusakan sejumlah 30 kepada 1 Pokémon Cadangan lawan. [Kelemahan dan Resistansi Pokémon Cadangan tidak mempengaruhi jumlah kerusakan.]"
		},

		damage: 50,
		cost: ["Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card