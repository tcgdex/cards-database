import { Card } from "../../../interfaces"
import Set from "../SV4s"

const card: Card = {
	set: Set,

	name: {
		id: "Miltank"
	},

	illustrator: "sowsow",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],

	description: {
		id: "Kondisi Miltank memburuk jika susunya tidak diperah setiap hari. Rasa susu berubah berdasarkan musim."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Serudukan Penuh Semangat"
		},

		effect: {
			id: "Jika pada giliran ini, HP Pokémon ini dipulihkan, kerusakan yang diberikan bertambah sejumlah 90."
		},

		damage: "60+",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card