import { Card } from "../../../interfaces"
import Set from "../sv5s"

const card: Card = {
	set: Set,

	name: {
		id: "Centiskorch"
	},

	illustrator: "Krgc",
	category: "Pokemon",
	hp: 140,
	types: ["Fire"],

	description: {
		id: "Suhu tubuh Centiskorch saat memancarkan panas mencapai sekitar 800 ºC. Pokémon ini akan loncat menyerang sambil mengelokkan tubuhnya bagaikan pecut."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			id: "Menghanguskan"
		},

		effect: {
			id: "Ubah kondisi Pokémon Bertarung lawan menjadi Luka Bakar."
		},

		cost: ["Fire"]
	}, {
		name: {
			id: "Embusan Hitam Gosong"
		},

		effect: {
			id: "Jika Pokémon Bertarung lawan tidak mengalami kondisi Luka Bakar, serangan ini gagal."
		},

		damage: 180,
		cost: ["Fire", "Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card