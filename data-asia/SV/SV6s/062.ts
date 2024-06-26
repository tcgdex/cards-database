import { Card } from "../../../interfaces"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		id: "Iron Bundle"
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	description: {
		id: "Pokémon yang mirip dengan objek misterius yang terdaftar dalam sebuah buku kuno. Hanya terdapat 2 laporan kesaksian atas Pokémon ini."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Interjet"
		},

		effect: {
			id: "Tukar Pokémon ini dengan Pokémon Cadangan. Setelah itu, lawan menukar Pokémon Bertarungnya dengan Pokémon Cadangan."
		},

		damage: 60,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card