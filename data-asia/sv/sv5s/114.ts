import { Card } from "../../../interfaces"
import Set from "../sv5s"

const card: Card = {
	set: Set,

	name: {
		id: "Chatot"
	},

	illustrator: "GOTO minori",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		id: "Chatot mengeluarkan suara yang sama dengan lawan agar disangka sebagai teman dan tidak diserang."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Acapella"
		},

		effect: {
			id: "Pilih paling banyak 3 lembar Pokémon Basic dari Deck sendiri, lalu masukkan ke Cadangan. Kemudian, kocok Deck."
		},

		cost: ["Colorless"]
	}, {
		name: {
			id: "Embusan Angin"
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