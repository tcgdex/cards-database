import { Card } from "../../../interfaces"
import Set from "../sv5s"

const card: Card = {
	set: Set,

	name: {
		id: "Great Tusk"
	},

	illustrator: "GIDORA",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],

	description: {
		id: "Terdapat laporan kesaksian atas Pokémon ini dalam beberapa tahun terakhir. Nama Great Tusk diambil dari nama makhluk hidup yang tercantum dalam suatu buku."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Fondasi Runtuh"
		},

		effect: {
			id: "Buang 1 kartu dari atas Deck lawan ke Trash. Jika pada giliran ini, Supporter Purba telah dimainkan dari Kartu Pegangan, buang lagi 3 kartu tambahan ke Trash."
		},

		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			id: "Taring Raksasa"
		},

		damage: 160,
		cost: ["Fighting", "Fighting", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "H"
}

export default card