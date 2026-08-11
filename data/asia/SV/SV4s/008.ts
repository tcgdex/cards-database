import { Card } from "models/database/card"
import Set from "../SV4s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Bounsweet"
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		'id-id': "Bounsweet sangat bermanfaat pada zaman dahulu ketika pemanis masih sedikit karena ia mengeluarkan keringat manis yang rasanya seperti buah yang dimasak."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Quick Attack"
		},

		effect: {
			'id-id': "Lempar koin 1 kali. Jika hasilnya sisi depan, kerusakan yang diberikan bertambah sejumlah 20."
		},

		damage: "10+",
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card