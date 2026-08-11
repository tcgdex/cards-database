import { Card } from "../../../interfaces"
import Set from "../SV4s"

const card: Card = {
	set: Set,

	name: {
		id: "Morpeko"
	},

	illustrator: "Cona Nitanda",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		id: "Sifat Morpeko berubah akibat hormon lapar. Pokémon ini mengamuk bagai makhluk kegelapan hingga perutnya kenyang."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			id: "Lari Kencang Perut Lapar"
		},

		effect: {
			id: "Jika Pokémon ini tidak mengenakan Energi, Pokémon ini menjadi tidak membutuhkan Energi untuk Mundur."
		}
	}],

	attacks: [{
		name: {
			id: "Roda Energi"
		},

		effect: {
			id: "Pilih 2 Energi {Kegelapan} yang dikenakan pada Pokémon ini, lalu pindahkan ke 1 Pokémon Cadangan."
		},

		damage: 70,
		cost: ["Darkness", "Darkness"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card