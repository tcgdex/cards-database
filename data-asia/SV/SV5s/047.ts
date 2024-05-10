import { Card } from "../../../interfaces"
import Set from "../SV5s"

const card: Card = {
	set: Set,

	name: {
		id: "Pikachu"
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],

	description: {
		id: "Dikatakan saat beberapa Pikachu berkumpul, listrik dahsyat akan terkumpul di sana dan petir dapat menyambar."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Percikan Elektromagnetik"
		},

		effect: {
			id: "Serangan ini memberikan kerusakan sejumlah 10 kepada 1 Pokémon lawan. [Kelemahan dan Resistansi Pokémon Cadangan tidak mempengaruhi jumlah kerusakan.]"
		},

		cost: ["Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card