import { Card } from "models/database/card"
import Set from "../SV4s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Tinkaton"
	},

	illustrator: "KEIICHIRO ITO",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],

	description: {
		'id-id': "Tinkaton mengayun-ayunkan palu yang beratnya melebihi 100 kilogram dengan mudahnya, lalu merebut barang yang diinginkannya dan membawanya pulang."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'id-id': "Serangan Tunggal Kehancuran"
		},

		effect: {
			'id-id': "Pilih 1 Energi yang dikenakan pada Pokémon Bertarung lawan, lalu buang ke Trash."
		},

		damage: 30,
		cost: ["Psychic"]
	}, {
		name: {
			'id-id': "Palu Logam Paduan"
		},

		effect: {
			'id-id': "Jika Pokémon ini mengenakan Energi {Logam}, kerusakan yang diberikan bertambah sejumlah 120."
		},

		damage: "60+",
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card