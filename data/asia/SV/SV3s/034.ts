import { Card } from "models/database/card"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Cubchoo"
	},

	illustrator: "Mizue",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		'id-id': "Cubchoo banyak dijumpai di tepi laut daratan dingin. Terdapat kemungkinan Pokémon ini sedang sakit jika ingusnya tidak mengalir."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Tendangan Penghempas"
		},

		damage: 10,
		cost: ["Water"]
	}, {
		name: {
			'id-id': "Menggulingkan"
		},

		effect: {
			'id-id': "Lempar koin 1 kali. Jika hasilnya sisi depan, kerusakan yang diberikan bertambah sejumlah 20."
		},

		damage: "20+",
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card