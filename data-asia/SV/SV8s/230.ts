import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Pikachu ex"
	},

	illustrator: "GIDORA",
	category: "Pokemon",
	hp: 200,
	types: ["Lightning"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			id: "Hati Pejuang"
		},

		effect: {
			id: "Saat Pokémon ini KO karena menerima kerusakan akibat serangan ketika HP Pokémon ini masih penuh, Pokémon ini tidak KO dan tetap berada di Arena dengan kondisi sisa HP sejumlah 10."
		}
	}],

	attacks: [{
		name: {
			id: "Topaz Bolt"
		},

		effect: {
			id: "Pilih 3 Energi yang dikenakan pada Pokémon ini, lalu buang ke Trash."
		},

		damage: 300,
		cost: ["Grass", "Lightning", "Metal"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card