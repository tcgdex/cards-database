import { Card } from "../../../interfaces"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		id: "Finizen"
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 50,
	types: ["Water"],

	description: {
		id: "Finizen suka bermain-main dengan ring air pada sirip ekornya bersama sesamanya. Pokémon ini mendeteksi emosi makhluk hidup dengan gelombang ultrasonik."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Evolusi Keberanian"
		},

		effect: {
			id: "Tukar Pokémon ini dengan Pokémon Cadangan. Setelah itu, pilih 1 kartu dari Deck sendiri yang merupakan evolusi dari Pokémon ini, lalu letakkan pada Pokémon ini untuk melakukan evolusi. Kemudian, kocok Deck."
		},

		cost: ["Water"]
	}, {
		name: {
			id: "Sirip Pemotong"
		},

		damage: 10,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card