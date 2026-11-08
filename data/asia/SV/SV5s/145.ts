import { Card } from "models/database/card"
import Set from "../SV5s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Deerling"
	},

	illustrator: "Susumu Maeya",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		'id-id': "Aroma Deerling berubah-ubah setiap musim. Deerling wujud ini mengeluarkan aroma manis dan lembut yang melekat di hidung."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Melompat Berkeliling"
		},

		damage: 10,
		cost: ["Colorless"]
	}, {
		name: {
			'id-id': "Serudukan Daun Gugur"
		},

		effect: {
			'id-id': "Pilih 1 Energi {Daun} yang dikenakan pada Pokémon ini, lalu buang ke Trash."
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