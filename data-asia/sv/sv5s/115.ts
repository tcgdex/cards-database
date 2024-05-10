import { Card } from "../../../interfaces"
import Set from "../sv5s"

const card: Card = {
	set: Set,

	name: {
		id: "Pidove"
	},

	illustrator: "Mékayu",
	category: "Pokemon",
	hp: 50,
	types: ["Colorless"],

	description: {
		id: "Pidove muncul di tempat manusia tinggal. Berhati-hatilah karena ratusan ekor Pidove akan berdatangan jika kamu menyebarkan makanan."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			id: "Evolusi Darurat"
		},

		effect: {
			id: "Dapat digunakan 1 kali pada giliran sendiri jika sisa HP Pokémon ini adalah 30 atau kurang. Pilih 1 lembar Unfezant (termasuk Pokémon {ex}) dari Deck sendiri, lalu letakkan pada Pidove ini untuk melakukan evolusi. Kemudian, kocok Deck."
		}
	}],

	attacks: [{
		name: {
			id: "Embusan Angin"
		},

		damage: 10,
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