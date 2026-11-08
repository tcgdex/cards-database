import { Card } from "models/database/card"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Paldean Wooper"
	},

	illustrator: "kirisAki",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],

	description: {
		'id-id': "Membran beracun melindungi tubuh Wooper yang hidup di darat setelah kalah dalam pertarungan perebutan wilayah teritorial."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Racun Berceceran"
		},

		effect: {
			'id-id': "Ubah kondisi Pokémon Bertarung kedua pemain masing-masing menjadi Racun."
		},

		cost: ["Darkness"]
	}, {
		name: {
			'id-id': "Tumbukan Ekor"
		},

		damage: 30,
		cost: ["Darkness", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card