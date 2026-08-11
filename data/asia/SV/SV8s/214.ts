import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Flygon ex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 310,
	types: ["Fighting"],
	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		name: {
			id: "Storm Back"
		},

		effect: {
			id: "Pemain dapat menukar Pokémon ini dengan Pokémon Cadangan."
		},

		damage: 130,
		cost: ["Fighting"]
	}, {
		name: {
			id: "Peridot Sonic"
		},

		effect: {
			id: "Serangan ini memberikan kerusakan masing-masing sejumlah 100 kepada semua Pokémon {ex}/{V} lawan. Kerusakan akibat serangan ini tidak terpengaruh oleh Kelemahan dan Resistansi."
		},

		cost: ["Water", "Fighting", "Metal"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card