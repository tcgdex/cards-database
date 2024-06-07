import { Card } from "../../../interfaces"
import Set from "../SV4s"

const card: Card = {
	set: Set,

	name: {
		id: "Surskit"
	},

	illustrator: "Yoriyuki Ikegami",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	description: {
		id: "Surskit mengeluarkan cairan beraroma manis yang seperti sirup dari ujung kepalanya. Pokémon ini bersarang di kolam yang dipenuhi tumbuhan air."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Triple Spin"
		},

		effect: {
			id: "Lempar koin 3 kali. Serangan ini memberikan kerusakan sejumlah 10 untuk tiap lemparan dengan hasil sisi depan."
		},

		damage: "10×",
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card