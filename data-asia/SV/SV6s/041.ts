import { Card } from "../../../interfaces"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		id: "Poliwag"
	},

	illustrator: "Kedamahadaitai Yawarakai",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		id: "Kakinya baru saja tumbuh sehingga ia tidak pandai berjalan. Tampaknya ia lebih suka berenang di dalam air."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Menginjak"
		},

		damage: 10,
		cost: ["Water"]
	}, {
		name: {
			id: "Tamparan Ekor"
		},

		effect: {
			id: "Lempar koin 2 kali. Serangan ini memberikan kerusakan sejumlah 20 untuk tiap lemparan dengan hasil sisi depan."
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