import { Card } from "models/database/card"
import Set from "../SV4s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Porygon-Z"
	},

	illustrator: "hatachu",
	category: "Pokemon",
	hp: 150,
	types: ["Colorless"],

	description: {
		'id-id': "Ada yang mengatakan bahwa penambahan program membuat Pokémon ini berevolusi, tapi Porygon-Z merupakan evolusi atau tidak masih menjadi perdebatan pada komunitas cendekiawan."
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'id-id': "Bug Turbo"
		},

		effect: {
			'id-id': "Dapat digunakan 1 kali pada giliran sendiri. Lempar koin 1 kali. Jika hasilnya sisi depan, pilih paling banyak 4 lembar Energi Dasar dari Trash sendiri, lalu kenakan pada Pokémon ini. Jika hasilnya sisi belakang, pilih 1 Energi yang dikenakan pada Pokémon ini, lalu buang ke Trash."
		}
	}],

	attacks: [{
		name: {
			'id-id': "Energy Attack"
		},

		effect: {
			'id-id': "Serangan ini memberikan kerusakan sejumlah 40 untuk tiap Energi yang dikenakan pada Pokémon ini."
		},

		damage: "40×",
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card