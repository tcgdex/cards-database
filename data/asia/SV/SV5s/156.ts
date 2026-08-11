import { Card } from "models/database/card"
import Set from "../SV5s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Excadrill"
	},

	illustrator: "Saboteri",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	description: {
		'id-id': "Sudah menjadi pengetahuan umum bahwa gua yang kelihatannya alami pun sebenarnya merupakan sisa dari galian kasar Excadrill."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'id-id': "Mud Shot"
		},

		damage: 20,
		cost: ["Colorless"]
	}, {
		name: {
			'id-id': "Wild Tackle"
		},

		effect: {
			'id-id': "Pokémon ini juga menerima kerusakan sejumlah 50."
		},

		damage: 180,
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card