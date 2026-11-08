import { Card } from "models/database/card"
import Set from "../SV5s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Sizzlipede"
	},

	illustrator: "Yukiko Baba",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	description: {
		'id-id': "Sizzlipede memancarkan panas menggunakan gas mudah terbakar yang dihimpun dalam tubuhnya. Bagian perutnya yang berwarna kuning merupakan bagian yang paling panas."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Heat Dive"
		},

		effect: {
			'id-id': "Pokémon ini juga menerima kerusakan sejumlah 10."
		},

		damage: 30,
		cost: ["Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card