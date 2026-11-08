import { Card } from "models/database/card"
import Set from "../SV4s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Onix"
	},

	illustrator: "Shiburingaru",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	description: {
		'id-id': "Onix menggali lubang secara bersemangat pada kecepatan 80 km/jam dengan menggoyang dan meliukkan tubuhnya yang besar dan kuat."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Tandukan Kepala Keras"
		},

		effect: {
			'id-id': "Lempar koin 1 kali. Jika hasilnya sisi depan, pada giliran lawan berikutnya, Pokémon ini tidak menerima kerusakan dan efek akibat serangan."
		},

		damage: 20,
		cost: ["Colorless"]
	}, {
		name: {
			'id-id': "Land Crush"
		},

		damage: 80,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "G"
}

export default card