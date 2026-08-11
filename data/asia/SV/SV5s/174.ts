import { Card } from "../../../interfaces"
import Set from "../SV5s"

const card: Card = {
	set: Set,

	name: {
		id: "Iron Boulder ex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 240,
	types: ["Fighting"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			id: "Repulsor Axe"
		},

		effect: {
			id: "Pada giliran lawan berikutnya, saat Pokémon ini menerima kerusakan akibat serangan, letakkan 8 Token Kerusakan pada Pokémon yang telah menggunakan serangan."
		},

		damage: 60,
		cost: ["Fighting", "Colorless"]
	}, {
		name: {
			id: "Power Stomp"
		},

		effect: {
			id: "Pilih 2 Energi yang dikenakan pada Pokémon ini, lalu buang ke Trash."
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