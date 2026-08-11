import { Card } from "models/database/card"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Golisopod"
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 140,
	types: ["Water"],

	description: {
		'id-id': "Golisopod tinggal dalam lubang di dasar laut atau kapal tenggelam. Pokémon ini bertarung melawan Grapploct, dan Pokémon yang kalah akan menjadi makanan Pokémon yang menang."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'id-id': "Power Cross"
		},

		effect: {
			'id-id': "Serangan ini memberikan kerusakan sejumlah 20 untuk tiap lembar Kartu Pegangan lawan."
		},

		damage: "20×",
		cost: ["Water"]
	}, {
		name: {
			'id-id': "Melawan Arus"
		},

		damage: 130,
		cost: ["Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card