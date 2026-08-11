import { Card } from "../../../interfaces"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		id: "Sinistcha"
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		id: "Pokémon yang menyukai tempat gelap dan dingin seperti di bawah lantai rumah, di dalam rak, atau lainnya. Ia berkeliaran mencari mangsanya setelah matahari terbenam."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			id: "Tetesan Kutukan"
		},

		effect: {
			id: "Letakkan sejumlah 4 Token Kerusakan pada Pokémon lawan sesukanya."
		},

		cost: ["Grass"]
	}, {
		name: {
			id: "Menghamburkan Teh"
		},

		effect: {
			id: "Buang paling banyak 3 lembar Energi {Daun} yang dikenakan pada Pokémon di Arena sendiri ke Trash, serangan ini memberikan kerusakan sejumlah 70 untuk tiap lembarnya."
		},

		damage: "70×",
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card