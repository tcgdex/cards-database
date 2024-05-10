import { Card } from "../../../interfaces"
import Set from "../sv3s"

const card: Card = {
	set: Set,

	name: {
		id: "Flamigo"
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],

	description: {
		id: "Kabarnya Flamigo mengikat lehernya ke pangkal lehernya agar energi yang terkumpul di dalam perutnya tidak keluar dari paruhnya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Mematuk"
		},

		damage: 30,
		cost: ["Fighting"]
	}, {
		name: {
			id: "Combat Beak"
		},

		effect: {
			id: "Kerusakan yang diberikan bertambah sejumlah 20 untuk tiap Pokémon Cadangan lawan."
		},

		damage: "20+",
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card