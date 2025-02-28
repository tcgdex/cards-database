import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Exeggcute"
	},

	illustrator: "Yuriko Akase",
	category: "Pokemon",
	hp: 30,
	types: ["Grass"],

	description: {
		id: "Karena saling mengirimkan telepati yang hanya diterima oleh Exeggcute, Pokémon ini selalu terkumpul 6 ekor pada saat apa pun."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Evolusi Karbitan"
		},

		effect: {
			id: "Serangan ini juga dapat digunakan pada giliran pertama Pemain Pertama. Pilih 1 kartu dari Deck sendiri yang merupakan evolusi dari Pokémon ini, lalu letakkan pada Pokémon ini untuk melakukan evolusi. Kemudian, kocok Deck."
		},

		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card