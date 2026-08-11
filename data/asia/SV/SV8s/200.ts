import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Alolan Dugtrio"
	},

	illustrator: "Yukihiro Tada",
	category: "Pokemon",
	hp: 110,
	types: ["Metal"],

	description: {
		id: "Kecepatannya tidak begitu bagus karena kumis metaliknya berat, tetapi ia memiliki kekuatan untuk menggali tembus bebatuan dasar yang keras."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			id: "Three Bingo"
		},

		effect: {
			id: "Jika jumlah Kartu Pegangan sendiri bukan 3 lembar, serangan ini gagal."
		},

		damage: 120
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