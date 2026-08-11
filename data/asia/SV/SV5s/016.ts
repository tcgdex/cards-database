import { Card } from "../../../interfaces"
import Set from "../SV5s"

const card: Card = {
	set: Set,

	name: {
		id: "Deerling"
	},

	illustrator: "Rond",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		id: "Aroma Deerling berubah-ubah setiap musim. Deerling wujud ini mengeluarkan aroma manis dan lembut yang melekat di hidung."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Melompat Berkeliling"
		},

		damage: 10,
		cost: ["Colorless"]
	}, {
		name: {
			id: "Serudukan Daun Gugur"
		},

		effect: {
			id: "Pilih 1 Energi {Daun} yang dikenakan pada Pokémon ini, lalu buang ke Trash."
		},

		damage: 40,
		cost: ["Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card