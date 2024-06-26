import { Card } from "../../../interfaces"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		id: "Enamorus"
	},

	illustrator: "DOM",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	description: {
		id: "Jika Enamorus datang terbang melampaui laut, artinya musim dingin yang ganas telah berakhir. Ada kisah tentang cinta kasih yang memekarkan hidup baru di Daerah Hisui."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Heart Sign"
		},

		damage: 30,
		cost: ["Colorless"]
	}, {
		name: {
			id: "Love Resonance"
		},

		effect: {
			id: "Jika di Arena sendiri ada Pokémon yang memiliki tipe yang sama dengan Pokémon di Arena lawan, kerusakan yang diberikan bertambah sejumlah 120."
		},

		damage: "80+",
		cost: ["Psychic", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card