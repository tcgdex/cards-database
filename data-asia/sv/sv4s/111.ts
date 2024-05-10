import { Card } from "../../../interfaces"
import Set from "../sv4s"

const card: Card = {
	set: Set,

	name: {
		id: "Spinda"
	},

	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	hp: 80,
	types: ["Colorless"],

	description: {
		id: "Pola titik-titik di tubuh Spinda berbeda pada setiap individu. Dengan gerakannya yang sempoyongan, ia dapat menghindar dari serangan lawannya dengan cermat!"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			id: "Sempoyongan"
		},

		effect: {
			id: "Jika Pokémon ini mengalami kondisi Pusing, saat Pokémon ini menerima kerusakan akibat serangan, pemain melempar koin 1 kali. Jika hasilnya sisi depan, Pokémon ini tidak menerima kerusakan tersebut."
		}
	}],

	attacks: [{
		name: {
			id: "Step Pusing"
		},

		effect: {
			id: "Ubah kondisi Pokémon ini menjadi Pusing."
		},

		damage: 100,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card