import { Card } from "../../../interfaces"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		id: "Thwackey"
	},

	illustrator: "GOSSAN",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],

	description: {
		id: "Thwackey yang dapat mengetukkan irama menggunakan dua buah stiknya dengan kencanglah yang makin dihormati kawanannya."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			id: "Gendang Dung Dung Dung"
		},

		effect: {
			id: "Dapat digunakan 1 kali pada giliran sendiri jika Pokémon Bertarung sendiri adalah Pokémon yang memiliki Ability Orkes Festival. Pilih 1 kartu sesukanya dari Deck sendiri, lalu tambahkan ke Kartu Pegangan. Kemudian, kocok Deck."
		}
	}],

	attacks: [{
		name: {
			id: "Menghantam"
		},

		damage: 50,
		cost: ["Grass", "Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card