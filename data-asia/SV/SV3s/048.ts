import { Card } from "../../../interfaces"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		id: "Joltik"
	},

	illustrator: "Kedamahadaitai Yawarakai",
	category: "Pokemon",
	hp: 40,
	types: ["Lightning"],

	description: {
		id: "Joltik melekatkan diri pada Pokémon lain dan mengisap listrik statis. Pokémon ini sering ditemukan menempel di bagian belakang Yamper."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Melompat Terus"
		},

		effect: {
			id: "Lempar koin 3 kali. Serangan ini memberikan kerusakan sejumlah 10 untuk tiap lemparan dengan hasil sisi depan."
		},

		damage: "10×",
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