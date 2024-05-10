import { Card } from "../../../interfaces"
import Set from "../sv5s"

const card: Card = {
	set: Set,

	name: {
		id: "Noctowl"
	},

	illustrator: "toi8",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],

	description: {
		id: "Kedua mata Noctowl memiliki struktur khusus sehingga hanya dengan sedikit cahaya, Pokémon ini dapat melihat jelas bagaikan siang hari dalam kegelapan sekalipun."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			id: "Perburuan Cakar Pengait"
		},

		effect: {
			id: "Pemain dapat memilih paling banyak 2 kartu sesukanya dari Deck sendiri, lalu menambahkannya ke Kartu Pegangan. Kemudian, kocok Deck."
		},

		damage: 70,
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

	retreat: 1,
	regulationMark: "H"
}

export default card