import { Card } from "../../../interfaces"
import Set from "../sv5s"

const card: Card = {
	set: Set,

	name: {
		id: "Marill"
	},

	illustrator: "yuu",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		id: "Bulu Marill bersifat menangkal air. Bulu tersebut tetap kering meskipun Pokémon ini terguyur air."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Menggelindingkan Bola"
		},

		effect: {
			id: "Lempar koin hingga hasilnya sisi belakang. Serangan ini memberikan kerusakan sejumlah 10 untuk tiap lemparan dengan hasil sisi depan."
		},

		damage: "10×",
		cost: ["Colorless"]
	}, {
		name: {
			id: "Magical Shot"
		},

		damage: 40,
		cost: ["Psychic", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card