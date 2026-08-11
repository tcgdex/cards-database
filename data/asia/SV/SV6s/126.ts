import { Card } from "models/database/card"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Applin"
	},

	illustrator: "Teeziro",
	category: "Pokemon",
	hp: 40,
	types: ["Dragon"],

	description: {
		'id-id': "Applin hidup di dalam buah apel. Jika apelnya habis, Pokémon ini akan melemah karena kehilangan cairan tubuhnya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Mencari Teman"
		},

		effect: {
			'id-id': "Pilih 1 lembar Pokémon dari Deck sendiri, perlihatkan ke lawan, lalu tambahkan ke Kartu Pegangan. Kemudian, kocok Deck."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'id-id': "Tubrukan Menggelinding"
		},

		damage: 30,
		cost: ["Grass", "Fire"]
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card