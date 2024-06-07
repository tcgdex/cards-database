import { Card } from "../../../interfaces"
import Set from "../SV5s"

const card: Card = {
	set: Set,

	name: {
		id: "Heatmor"
	},

	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	hp: 110,
	types: ["Fire"],

	description: {
		id: "Heatmor mengisap udara melalui lubang di ekornya untuk mengobarkan api. Kondisinya memburuk jika lubang tersebut ditutup."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Nyala Api"
		},

		damage: 20,
		cost: ["Fire"]
	}, {
		name: {
			id: "Api Jilat Bakar"
		},

		effect: {
			id: "Lempar koin 3 kali. Pilih Energi yang dikenakan pada Pokémon ini untuk tiap lemparan dengan hasil sisi belakang, lalu buang ke Trash."
		},

		damage: 130,
		cost: ["Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card