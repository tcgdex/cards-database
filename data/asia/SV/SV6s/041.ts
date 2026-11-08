import { Card } from "models/database/card"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Poliwag"
	},

	illustrator: "Kedamahadaitai Yawarakai",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		'id-id': "Kakinya baru saja tumbuh sehingga ia tidak pandai berjalan. Tampaknya ia lebih suka berenang di dalam air."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Menginjak"
		},

		damage: 10,
		cost: ["Water"]
	}, {
		name: {
			'id-id': "Tamparan Ekor"
		},

		effect: {
			'id-id': "Lempar koin 2 kali. Serangan ini memberikan kerusakan sejumlah 20 untuk tiap lemparan dengan hasil sisi depan."
		},

		damage: "20×",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card