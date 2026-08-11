import { Card } from "models/database/card"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Hoopa ex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 220,
	types: ["Fighting"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			'id-id': "Energy Crush"
		},

		effect: {
			'id-id': "Serangan ini memberikan kerusakan sejumlah 50 untuk tiap Energi yang dikenakan pada semua Pokémon lawan."
		},

		damage: "50×",
		cost: ["Darkness", "Darkness"]
	}, {
		name: {
			'id-id': "Bandit Fist"
		},

		effect: {
			'id-id': "Pada giliran sendiri berikutnya, Pokémon ini tidak dapat menggunakan Bandit Fist."
		},

		damage: 200,
		cost: ["Darkness", "Darkness", "Darkness"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card