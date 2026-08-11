import { Card } from "models/database/card"
import Set from "../SV4s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Garbodor"
	},

	illustrator: "Shinya Komatsu",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],

	description: {
		'id-id': "Cairan beracun yang dikeluarkan dari lengan kanan Garbodor sangat berbahaya, sehingga makhluk hidup yang sedang lemah akan mati seketika jika bermandikan cairan tersebut."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'id-id': "Lempar Buang"
		},

		effect: {
			'id-id': "Buang sesukanya Pokémon Tool dari Kartu Pegangan sendiri ke Trash, serangan ini memberikan kerusakan sejumlah 50 untuk tiap lembarnya."
		},

		damage: "50×",
		cost: ["Darkness"]
	}, {
		name: {
			'id-id': "Venom Hit"
		},

		effect: {
			'id-id': "Ubah kondisi Pokémon Bertarung lawan menjadi Racun."
		},

		damage: 80,
		cost: ["Darkness", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card