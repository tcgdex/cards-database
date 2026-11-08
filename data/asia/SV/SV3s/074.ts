import { Card } from "models/database/card"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Gimmighoul"
	},

	illustrator: "Mizue",
	category: "Pokemon",
	hp: 50,
	types: ["Psychic"],

	description: {
		'id-id': "Sekitar 1500 tahun lalu, Gimmighoul terlahir di dalam kotak harta. Pokémon ini mengisap vitalitas orang jahat yang hendak mencuri hartanya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Memanggil Teman"
		},

		effect: {
			'id-id': "Pilih 1 lembar Pokémon Basic dari Deck sendiri, lalu masukkan ke Cadangan. Kemudian, kocok Deck."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'id-id': "Menohok"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card