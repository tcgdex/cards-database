import { Card } from "../../../interfaces"
import Set from "../sv3s"

const card: Card = {
	set: Set,

	name: {
		id: "Hoopa ex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 220,
	types: ["Fighting"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			id: "Energy Crush"
		},

		effect: {
			id: "Serangan ini memberikan kerusakan sejumlah 50 untuk tiap Energi yang dikenakan pada semua Pokémon lawan."
		},

		damage: "50×",
		cost: ["Darkness", "Darkness"]
	}, {
		name: {
			id: "Bandit Fist"
		},

		effect: {
			id: "Pada giliran sendiri berikutnya, Pokémon ini tidak dapat menggunakan Bandit Fist."
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