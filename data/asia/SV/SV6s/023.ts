import { Card } from "models/database/card"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Sinistcha ex"
	},

	illustrator: "aky CG Works",
	category: "Pokemon",
	hp: 240,
	types: ["Grass"],
	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			'id-id': "Menyeduh Balik"
		},

		effect: {
			'id-id': "Perlihatkan semua Energi Dasar {Daun} yang ada di Trash sendiri ke lawan, letakkan 2 Token Kerusakan untuk tiap lembarnya pada 1 Pokémon lawan. Setelah itu, kocok kembali Energi yang telah diperlihatkan ke Deck."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'id-id': "Matcha Splash"
		},

		effect: {
			'id-id': "Pulihkan HP semua Pokémon sendiri masing-masing sejumlah 30."
		},

		damage: 120,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card