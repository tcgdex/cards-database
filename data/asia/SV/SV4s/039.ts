import { Card } from "../../../interfaces"
import Set from "../SV4s"

const card: Card = {
	set: Set,

	name: {
		id: "Tsareena ex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 310,
	types: ["Water"],
	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		name: {
			id: "Icicle Sole"
		},

		effect: {
			id: "Letakkan Token Kerusakan pada 1 Pokémon lawan hingga sisa HP Pokémon tersebut menjadi sejumlah 30."
		},

		cost: ["Grass"]
	}, {
		name: {
			id: "Tendangan Tropis"
		},

		effect: {
			id: "Pulihkan HP Pokémon ini sejumlah 30, lalu pulihkan juga semua Kondisi Khusus yang dialami Pokémon ini."
		},

		damage: 180,
		cost: ["Grass", "Grass"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card