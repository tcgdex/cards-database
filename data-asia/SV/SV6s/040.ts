import { Card } from "../../../interfaces"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		id: "Ogerpon Topeng Tungku ex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 210,
	types: ["Fire"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			id: "Tungku Kemarahan"
		},

		effect: {
			id: "Serangan ini memberikan kerusakan sejumlah 20 untuk tiap Token Kerusakan yang dimiliki Pokémon ini."
		},

		damage: "20×",
		cost: ["Fire", "Colorless", "Colorless"]
	}, {
		name: {
			id: "Dynamic Blaze"
		},

		effect: {
			id: "Jika Pokémon Bertarung lawan adalah Pokémon Evolusi, kerusakan yang diberikan bertambah sejumlah 140. Pada kondisi tersebut, buang semua Energi yang dikenakan pada Pokémon ini ke Trash."
		},

		damage: "140+",
		cost: ["Fire", "Fire", "Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card