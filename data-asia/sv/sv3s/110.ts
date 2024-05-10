import { Card } from "../../../interfaces"
import Set from "../sv3s"

const card: Card = {
	set: Set,

	name: {
		id: "Darkrai"
	},

	illustrator: "Bun Toujo",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],

	description: {
		id: "Darkrai memiliki kemampuan untuk membuat orang-orang tidur nyenyak dan memperlihatkan mimpi. Aktif pada malam bulan baru."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Tidur Singkat Hitam"
		},

		effect: {
			id: "Ubah kondisi Pokémon Bertarung lawan menjadi Tidur."
		},

		damage: 20,
		cost: ["Darkness"]
	}, {
		name: {
			id: "Night Cyclone"
		},

		effect: {
			id: "Pindahkan sesukanya semua Energi yang dikenakan pada Pokémon ini ke Pokémon Cadangan."
		},

		damage: 120,
		cost: ["Darkness", "Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card