import { Card } from "../../../interfaces"
import Set from "../sv3s"

const card: Card = {
	set: Set,

	name: {
		id: "Stunfisk"
	},

	illustrator: "Sumiyoshi Kizuki",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	description: {
		id: "Saat Stunfisk melepaskan listrik kuat dari pola berwarna kuning di tubuhnya, entah kenapa Pokémon ini tersenyum kecil."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			id: "Custom Trap"
		},

		effect: {
			id: "Jika Pokémon ini mengenakan Pokémon Tool saat Pokémon ini ada di Arena Bertarung dan menerima kerusakan akibat serangan dari Pokémon lawan, letakkan 5 Token Kerusakan pada Pokémon yang telah menggunakan serangan."
		}
	}],

	attacks: [{
		name: {
			id: "Gelegar Tanah"
		},

		effect: {
			id: "Pada giliran lawan berikutnya, Pokémon yang menerima serangan ini tidak dapat Mundur."
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