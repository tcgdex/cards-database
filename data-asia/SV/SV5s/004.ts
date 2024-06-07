import { Card } from "../../../interfaces"
import Set from "../SV5s"

const card: Card = {
	set: Set,

	name: {
		id: "Nuzleaf"
	},

	illustrator: "Lee HyunJung",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	description: {
		id: "Nuzleaf hidup jauh di dalam hutan. Pokémon ini membuat seruling menggunakan daun di kepalanya dan meniupkan suara seruling yang membuat perasaan menjadi tidak tenang."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			id: "Menohok"
		},

		damage: 20,
		cost: ["Grass"]
	}, {
		name: {
			id: "Tamparan Beruntun"
		},

		effect: {
			id: "Lempar koin 3 kali. Serangan ini memberikan kerusakan sejumlah 30 untuk tiap lemparan dengan hasil sisi depan."
		},

		damage: "30×",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card