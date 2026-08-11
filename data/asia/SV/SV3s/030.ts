import { Card } from "../../../interfaces"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		id: "Palkia"
	},

	illustrator: "Ryuta Fuse",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],

	description: {
		id: "Palkia memiliki kemampuan untuk mendistorsi ruang, Pokémon ini digambarkan sebagai dewa dalam mitos di Daerah Sinnoh."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Teleport Break"
		},

		effect: {
			id: "Pemain dapat menukar Pokémon ini dengan Pokémon Cadangan."
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			id: "Side Counter"
		},

		effect: {
			id: "Jika sisa Kartu Point sendiri lebih banyak dari sisa Kartu Point lawan, kerusakan yang diberikan bertambah sejumlah 80."
		},

		damage: "80+",
		cost: ["Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card