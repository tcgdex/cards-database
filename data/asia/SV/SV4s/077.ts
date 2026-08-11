import { Card } from "../../../interfaces"
import Set from "../SV4s"

const card: Card = {
	set: Set,

	name: {
		id: "Nacli"
	},

	illustrator: "Mizue",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],

	description: {
		id: "Nacli terlahir di kubah garam di dasar tanah. Karena ia membagikan garam yang begitu berharga, Pokémon ini dijaga dengan baik pada zaman dahulu."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Lemparan Batu"
		},

		damage: 10,
		cost: ["Fighting"]
	}, {
		name: {
			id: "Stone Edge"
		},

		effect: {
			id: "Lempar koin 1 kali. Jika hasilnya sisi depan, kerusakan yang diberikan bertambah sejumlah 20."
		},

		damage: "20+",
		cost: ["Fighting", "Fighting"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card