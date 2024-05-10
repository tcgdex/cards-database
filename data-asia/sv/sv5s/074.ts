import { Card } from "../../../interfaces"
import Set from "../sv5s"

const card: Card = {
	set: Set,

	name: {
		id: "Excadrill"
	},

	illustrator: "Bun Toujo",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	description: {
		id: "Sudah menjadi pengetahuan umum bahwa gua yang kelihatannya alami pun sebenarnya merupakan sisa dari galian kasar Excadrill."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			id: "Mud Shot"
		},

		damage: 20,
		cost: ["Colorless"]
	}, {
		name: {
			id: "Wild Tackle"
		},

		effect: {
			id: "Pokémon ini juga menerima kerusakan sejumlah 50."
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