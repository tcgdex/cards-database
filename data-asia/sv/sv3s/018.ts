import { Card } from "../../../interfaces"
import Set from "../sv3s"

const card: Card = {
	set: Set,

	name: {
		id: "Darumaka"
	},

	illustrator: "Miki Tanaka",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	description: {
		id: "Saat sedang tidur, Darumaka tidak akan terguling meskipun didorong atau ditarik. Populer sebagai motif benda pembawa keberuntungan."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Tandukan Kepala"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			id: "Serangan Kejutan"
		},

		effect: {
			id: "Lempar koin 1 kali. Jika hasilnya sisi belakang, serangan ini gagal."
		},

		damage: 70,
		cost: ["Fire", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card