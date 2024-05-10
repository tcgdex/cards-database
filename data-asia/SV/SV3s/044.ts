import { Card } from "../../../interfaces"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		id: "Lanturn"
	},

	illustrator: "aspara",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],

	description: {
		id: "Lanturn memancarkan cahaya yang kuat untuk membuat mata buruannya silau dan menjadi lengah, lalu menyerangnya menggunakan listrik."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			id: "Bola Petir"
		},

		damage: 50,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			id: "Aqua Spark"
		},

		effect: {
			id: "Jika Pokémon ini mengenakan Energi {Air}, kerusakan yang diberikan bertambah sejumlah 120."
		},

		damage: "80+",
		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card