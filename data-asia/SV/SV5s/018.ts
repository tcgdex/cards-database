import { Card } from "../../../interfaces"
import Set from "../SV5s"

const card: Card = {
	set: Set,

	name: {
		id: "Grubbin"
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		id: "Rahang Grubbin yang besar cukup kuat untuk mematahkan ranting pohon yang tebal. Rookidee yang merupakan musuh alaminya pun kabur dibuatnya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Menggerombol"
		},

		effect: {
			id: "Pilih paling banyak 2 lembar Grubbin dari Deck sendiri, lalu masukkan ke Cadangan. Kemudian, kocok Deck."
		},

		cost: ["Colorless"]
	}, {
		name: {
			id: "Capitan Keras"
		},

		damage: 10,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card