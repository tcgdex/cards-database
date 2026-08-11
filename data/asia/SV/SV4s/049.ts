import { Card } from "models/database/card"
import Set from "../SV4s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Blitzle"
	},

	illustrator: "Shinji Kanda",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		'id-id': "Surai Blitzle bersinar ketika melepaskan listrik. Pokémon ini menggunakan jumlah dan irama dari kilatan-kilatan ini untuk berbincang dengan sesamanya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Tendangan Belakang"
		},

		damage: 10,
		cost: ["Lightning"]
	}, {
		name: {
			'id-id': "Wild Volt"
		},

		effect: {
			'id-id': "Pokémon ini juga menerima kerusakan sejumlah 20."
		},

		damage: 50,
		cost: ["Lightning", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card