import { Card } from "../../../interfaces"
import Set from "../sv4s"

const card: Card = {
	set: Set,

	name: {
		id: "Pansear"
	},

	illustrator: "LINNE",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	description: {
		id: "Pansear hidup di gua vulkanik. Api menyala di dalam jambul kepalanya dan suhunya mencapai 300 °C."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Memanggil Teman"
		},

		effect: {
			id: "Pilih 1 lembar Pokémon Basic dari Deck sendiri, lalu masukkan ke Cadangan. Kemudian, kocok Deck."
		},

		cost: ["Colorless"]
	}, {
		name: {
			id: "Kobaran Api Penghangus"
		},

		effect: {
			id: "Ubah kondisi Pokémon Bertarung lawan menjadi Luka Bakar."
		},

		damage: 20,
		cost: ["Fire", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card