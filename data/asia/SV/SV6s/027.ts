import { Card } from "../../../interfaces"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		id: "Ninetales"
	},

	illustrator: "KEIICHIRO ITO",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],

	description: {
		id: "Ia memiliki bulu yang berkilau keemasan dan 9 ekor yang panjang. Dikatakan bahwa ia hidup selama 1000 tahun."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			id: "Cahaya Api Membingungkan"
		},

		effect: {
			id: "Ubah kondisi Pokémon Bertarung lawan menjadi Luka Bakar dan Pusing."
		},

		damage: 90,
		cost: ["Fire", "Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card