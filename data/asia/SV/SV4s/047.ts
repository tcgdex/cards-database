import { Card } from "../../../interfaces"
import Set from "../SV4s"

const card: Card = {
	set: Set,

	name: {
		id: "Chien-Pao"
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	description: {
		id: "Chien-Pao adalah, kebencian orang-orang yang meninggal oleh pedang pada zaman dahulu menyelimuti dirinya dengan salju lalu berubah menjadi Pokémon."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Snow Bring"
		},

		effect: {
			id: "Pilih paling banyak 2 lembar Energi Dasar {Air} dari Trash sendiri, lalu kenakan pada 1 Pokémon sendiri."
		},

		cost: ["Water"]
	}, {
		name: {
			id: "Wrath Blade"
		},

		effect: {
			id: "Pilih 2 Energi yang dikenakan pada Pokémon ini, lalu buang ke Trash."
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