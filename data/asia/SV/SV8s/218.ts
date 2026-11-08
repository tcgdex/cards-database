import { Card } from "models/database/card"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Tatsugiri ex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 160,
	types: ["Dragon"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			'id-id': "Pompa Mendadak"
		},

		effect: {
			'id-id': "Kerusakan akibat serangan ini tidak terpengaruh oleh efek yang sedang dialami Pokémon Bertarung lawan."
		},

		damage: 100,
		cost: ["Fire", "Water"]
	}, {
		name: {
			'id-id': "Cinnabar Lure"
		},

		effect: {
			'id-id': "Lihat 10 kartu dari atas Deck sendiri, pilih sesukanya Pokémon di antaranya, lalu masukkan ke Cadangan. Kocok kembali sisa kartu ke Deck."
		},

		cost: ["Fire", "Water", "Darkness"]
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card