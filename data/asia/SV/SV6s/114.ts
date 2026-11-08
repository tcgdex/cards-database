import { Card } from "models/database/card"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Mightyena"
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],

	description: {
		'id-id': "Ketika bau mangsa yang berada di kejauhan tercium, gerombolan Pokémon ini akan mulai bergerak secara serentak sesuai perintah pemimpinnya."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'id-id': "Berburu Menggerombol"
		},

		effect: {
			'id-id': "Jika ada Mightyena di Cadangan sendiri, kerusakan yang diberikan bertambah sejumlah 90."
		},

		damage: "30+",
		cost: ["Darkness"]
	}, {
		name: {
			'id-id': "Memojokkan"
		},

		effect: {
			'id-id': "Pada giliran lawan berikutnya, Pokémon yang menerima serangan ini tidak dapat Mundur."
		},

		damage: 60,
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card