import { Card } from "../../../interfaces"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		id: "Flamigo"
	},

	illustrator: "Hiroki Asanuma",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],

	description: {
		id: "Kabarnya Flamigo mengikat lehernya ke pangkal lehernya agar energi yang terkumpul di dalam perutnya tidak keluar dari paruhnya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Mematuk"
		},

		damage: 20,
		cost: ["Colorless"]
	}, {
		name: {
			id: "Synchrofeather"
		},

		effect: {
			id: "Jika ada Flamigo di Cadangan sendiri, serangan ini juga memberikan kerusakan sejumlah 60 kepada 1 Pokémon Cadangan lawan. [Kelemahan dan Resistansi Pokémon Cadangan tidak mempengaruhi jumlah kerusakan.]"
		},

		damage: 60,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card