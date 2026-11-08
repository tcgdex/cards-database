import { Card } from "models/database/card"
import Set from "../SV5s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Iron Boulder ex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 240,
	types: ["Fighting"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			'id-id': "Repulsor Axe"
		},

		effect: {
			'id-id': "Pada giliran lawan berikutnya, saat Pokémon ini menerima kerusakan akibat serangan, letakkan 8 Token Kerusakan pada Pokémon yang telah menggunakan serangan."
		},

		damage: 60,
		cost: ["Fighting", "Colorless"]
	}, {
		name: {
			'id-id': "Power Stomp"
		},

		effect: {
			'id-id': "Pilih 2 Energi yang dikenakan pada Pokémon ini, lalu buang ke Trash."
		},

		damage: 200,
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card