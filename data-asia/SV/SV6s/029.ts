import { Card } from "../../../interfaces"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		id: "Magcargo ex"
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 270,
	types: ["Fire"],
	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			id: "Magma Panas"
		},

		effect: {
			id: "Ubah kondisi Pokémon Bertarung lawan menjadi Luka Bakar."
		},

		damage: 70,
		cost: ["Fire", "Colorless"]
	}, {
		name: {
			id: "Ground Burn"
		},

		effect: {
			id: "Buang kartu masing-masing 1 lembar dari atas Deck kedua pemain ke Trash, kerusakan yang diberikan bertambah sejumlah 140 untuk tiap lembar Energi yang ada di antaranya."
		},

		damage: "140+",
		cost: ["Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card