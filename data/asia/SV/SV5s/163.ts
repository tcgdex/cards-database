import { Card } from "models/database/card"
import Set from "../SV5s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Chatot"
	},

	illustrator: "Scav",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		'id-id': "Chatot mengeluarkan suara yang sama dengan lawan agar disangka sebagai teman dan tidak diserang."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Acapella"
		},

		effect: {
			'id-id': "Pilih paling banyak 3 lembar Pokémon Basic dari Deck sendiri, lalu masukkan ke Cadangan. Kemudian, kocok Deck."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'id-id': "Embusan Angin"
		},

		damage: 20,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card