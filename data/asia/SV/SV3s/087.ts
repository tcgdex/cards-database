import { Card } from "models/database/card"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Stunfisk"
	},

	illustrator: "Sumiyoshi Kizuki",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	description: {
		'id-id': "Saat Stunfisk melepaskan listrik kuat dari pola berwarna kuning di tubuhnya, entah kenapa Pokémon ini tersenyum kecil."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'id-id': "Custom Trap"
		},

		effect: {
			'id-id': "Jika Pokémon ini mengenakan Pokémon Tool saat Pokémon ini ada di Arena Bertarung dan menerima kerusakan akibat serangan dari Pokémon lawan, letakkan 5 Token Kerusakan pada Pokémon yang telah menggunakan serangan."
		}
	}],

	attacks: [{
		name: {
			'id-id': "Gelegar Tanah"
		},

		effect: {
			'id-id': "Pada giliran lawan berikutnya, Pokémon yang menerima serangan ini tidak dapat Mundur."
		},

		damage: 30,
		cost: ["Fighting"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card