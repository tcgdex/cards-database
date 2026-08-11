import { Card } from "models/database/card"
import Set from "../SV4s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Chien-Pao"
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	description: {
		'id-id': "Chien-Pao adalah, kebencian orang-orang yang meninggal oleh pedang pada zaman dahulu menyelimuti dirinya dengan salju lalu berubah menjadi Pokémon."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Snow Bring"
		},

		effect: {
			'id-id': "Pilih paling banyak 2 lembar Energi Dasar {Air} dari Trash sendiri, lalu kenakan pada 1 Pokémon sendiri."
		},

		cost: ["Water"]
	}, {
		name: {
			'id-id': "Wrath Blade"
		},

		effect: {
			'id-id': "Pilih 2 Energi yang dikenakan pada Pokémon ini, lalu buang ke Trash."
		},

		damage: 130,
		cost: ["Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card