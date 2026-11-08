import { Card } from "models/database/card"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Heatran"
	},

	illustrator: "AKIRA EGAWA",
	category: "Pokemon",
	hp: 140,
	types: ["Metal"],

	description: {
		'id-id': "Heatran hidup di gua vulkanis. Pokémon ini menanamkan cakarnya yang berbentuk X dan merayap di dinding dan langit-langit."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'id-id': "Tubuh Berpijar"
		},

		effect: {
			'id-id': "Saat Pokémon ini ada di Arena Bertarung dan menerima kerusakan akibat serangan dari Pokémon lawan, ubah kondisi Pokémon yang telah menggunakan serangan menjadi Luka Bakar."
		}
	}],

	attacks: [{
		name: {
			'id-id': "Steel Burst"
		},

		effect: {
			'id-id': "Buang semua Energi {Logam} yang dikenakan pada Pokémon ini ke Trash, serangan ini memberikan kerusakan sejumlah 50 untuk tiap lembarnya."
		},

		damage: "50×",
		cost: ["Metal", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 4,
	regulationMark: "H"
}

export default card