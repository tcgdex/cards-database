import { Card } from "../../../interfaces"
import Set from "../sv3s"

const card: Card = {
	set: Set,

	name: {
		id: "Pidgeot ex"
	},

	illustrator: "Jerky",
	category: "Pokemon",
	hp: 280,
	types: ["Colorless"],
	stage: "Stage2",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			id: "Mach Search"
		},

		effect: {
			id: "Dapat digunakan 1 kali pada giliran sendiri. Pilih 1 kartu sesukanya dari Deck sendiri, lalu tambahkan ke Kartu Pegangan. Kemudian, kocok Deck. Jika pada giliran ini, Mach Search lainnya telah digunakan, Ability ini tidak dapat digunakan."
		}
	}],

	attacks: [{
		name: {
			id: "Angin Menderu"
		},

		effect: {
			id: "Pemain dapat membuang Stadium yang ada di Arena ke Trash."
		},

		damage: 120,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 0,
	regulationMark: "G"
}

export default card