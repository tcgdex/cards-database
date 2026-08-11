import { Card } from "models/database/card"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Probopass"
	},

	illustrator: "takuyoa",
	category: "Pokemon",
	hp: 150,
	types: ["Metal"],

	description: {
		'id-id': "Probopass menggunakan 3 unit kecil untuk menangkap mangsa dan bertarung dengan musuh. Tubuh utama umumnya hanya memberi perintah saja."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'id-id': "Triple Nose"
		},

		effect: {
			'id-id': "Lempar koin 3 kali. Serangan ini memberikan kerusakan sejumlah 40 untuk tiap lemparan dengan hasil sisi depan."
		},

		damage: "40×",
		cost: ["Metal", "Colorless"]
	}, {
		name: {
			'id-id': "Iron Buster"
		},

		effect: {
			'id-id': "Pada giliran sendiri berikutnya, Pokémon ini tidak dapat menggunakan serangan."
		},

		damage: 160,
		cost: ["Metal", "Metal", "Colorless"]
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
	regulationMark: "G"
}

export default card