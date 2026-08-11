import { Card } from "../../../interfaces"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		id: "Gloom"
	},

	illustrator: "Masako Tomii",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	description: {
		id: "Gloom mengeluarkan madu manis yang terlihat seperti air liur. Sangat lengket dan menempel dengan lekat jika disentuh."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			id: "Aroma Mengundang"
		},

		effect: {
			id: "Pilih 1 Pokémon Cadangan lawan, lalu tukar dengan Pokémon Bertarung."
		},

		cost: ["Colorless"]
	}, {
		name: {
			id: "Leaf Step"
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