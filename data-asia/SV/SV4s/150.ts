import { Card } from "../../../interfaces"
import Set from "../SV4s"

const card: Card = {
	set: Set,

	name: {
		id: "Brute Bonnet"
	},

	illustrator: "Tomokazu Komiya",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],

	description: {
		id: "Terdapat kemungkinan bahwa Pokémon ini merupakan makhluk hidup yang tertera sebagai Brute Bonnet dalam suatu buku."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			id: "Bubuk Debu Racun Ekstrem"
		},

		effect: {
			id: "Dapat digunakan 1 kali pada giliran sendiri jika Pokémon ini mengenakan Pemacu Energi Purba. Ubah kondisi Pokémon Bertarung kedua pemain masing-masing menjadi Racun."
		}
	}],

	attacks: [{
		name: {
			id: "Palu Mengamuk"
		},

		effect: {
			id: "Pada giliran sendiri berikutnya, Pokémon ini tidak dapat menggunakan serangan."
		},

		damage: 120,
		cost: ["Darkness", "Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card