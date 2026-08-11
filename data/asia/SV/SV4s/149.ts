import { Card } from "models/database/card"
import Set from "../SV4s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Morpeko"
	},

	illustrator: "Yuu Nishida",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		'id-id': "Sifat Morpeko berubah akibat hormon lapar. Pokémon ini mengamuk bagai makhluk kegelapan hingga perutnya kenyang."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'id-id': "Lari Kencang Perut Lapar"
		},

		effect: {
			'id-id': "Jika Pokémon ini tidak mengenakan Energi, Pokémon ini menjadi tidak membutuhkan Energi untuk Mundur."
		}
	}],

	attacks: [{
		name: {
			'id-id': "Roda Energi"
		},

		effect: {
			'id-id': "Pilih 2 Energi {Kegelapan} yang dikenakan pada Pokémon ini, lalu pindahkan ke 1 Pokémon Cadangan."
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