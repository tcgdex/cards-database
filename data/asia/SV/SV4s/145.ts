import { Card } from "models/database/card"
import Set from "../SV4s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Mienshao"
	},

	illustrator: "Taira Akitsu",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],

	description: {
		'id-id': "Tendangan yang diluncurkan Mienshao dengan kecepatan yang tidak dapat ditangkap mata dapat menghancurleburkan batu raksasa."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'id-id': "Tusukan Tiga Tingkat"
		},

		effect: {
			'id-id': "Lempar koin 3 kali. Serangan ini memberikan kerusakan sejumlah 20 untuk tiap lemparan dengan hasil sisi depan."
		},

		damage: "20×",
		cost: ["Fighting"]
	}, {
		name: {
			'id-id': "Cambuk Ahli"
		},

		effect: {
			'id-id': "Jika pada giliran ini, Pokémon Tool dikenakan dari Kartu Pegangan pada Pokémon ini, kerusakan yang diberikan bertambah sejumlah 70."
		},

		damage: "50+",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card