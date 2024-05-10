import { Card } from "../../../interfaces"
import Set from "../SV4s"

const card: Card = {
	set: Set,

	name: {
		id: "Roaring Moon ex"
	},

	illustrator: "Ryota Murayama",
	category: "Pokemon",
	hp: 230,
	types: ["Darkness"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			id: "Mengoyak Gila-gilaan"
		},

		effect: {
			id: "Pokémon Bertarung lawan KO. Setelah itu, berikan kerusakan sejumlah 200 kepada Pokémon ini."
		},

		cost: ["Darkness", "Darkness", "Colorless"]
	}, {
		name: {
			id: "Calamity Storm"
		},

		effect: {
			id: "Pemain dapat membuang Stadium yang ada di Arena ke Trash. Jika dilakukan, kerusakan yang diberikan bertambah sejumlah 120."
		},

		damage: "100+",
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