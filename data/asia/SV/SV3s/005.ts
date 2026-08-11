import { Card } from "models/database/card"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Shuckle"
	},

	illustrator: "Kurata So",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	description: {
		'id-id': "Tanpa disadari, beri yang ditimbun Shuckle di dalam tempurungnya yang berbentuk seperti pot berubah menjadi jus kental yang pekat."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Aroma Beri"
		},

		effect: {
			'id-id': "Pilih 1 lembar Pokémon Basic dari Deck sendiri, lalu masukkan ke Cadangan. Kemudian, kocok Deck."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'id-id': "Guard Press"
		},

		effect: {
			'id-id': "Pada giliran lawan berikutnya, kerusakan akibat serangan yang diterima Pokémon ini berkurang sejumlah 30."
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card