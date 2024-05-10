import { Card } from "../../../interfaces"
import Set from "../sv5s"

const card: Card = {
	set: Set,

	name: {
		id: "Electivire"
	},

	illustrator: "Yuya Oka",
	category: "Pokemon",
	hp: 140,
	types: ["Lightning"],

	description: {
		id: "Kuantitas listrik yang dihasilkan Electivire sebanding dengan denyut jantungnya. Begitu terjadi pertarungan, voltasenya akan meningkat drastis."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			id: "Kepalan Kebocoran Listrik"
		},

		effect: {
			id: "Jika ada Pokémon {Air} di Arena lawan, kerusakan yang diberikan bertambah sejumlah 120."
		},

		damage: "40+",
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			id: "Electroslug"
		},

		damage: 140,
		cost: ["Lightning", "Lightning", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card