import { Card } from "models/database/card"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Gloom"
	},

	illustrator: "Masako Tomii",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	description: {
		'id-id': "Gloom mengeluarkan madu manis yang terlihat seperti air liur. Sangat lengket dan menempel dengan lekat jika disentuh."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'id-id': "Aroma Mengundang"
		},

		effect: {
			'id-id': "Pilih 1 Pokémon Cadangan lawan, lalu tukar dengan Pokémon Bertarung."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'id-id': "Leaf Step"
		},

		damage: 20,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card