import { Card } from "../../../interfaces"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		id: "Golisopod"
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 140,
	types: ["Water"],

	description: {
		id: "Golisopod tinggal dalam lubang di dasar laut atau kapal tenggelam. Pokémon ini bertarung melawan Grapploct, dan Pokémon yang kalah akan menjadi makanan Pokémon yang menang."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			id: "Power Cross"
		},

		effect: {
			id: "Serangan ini memberikan kerusakan sejumlah 20 untuk tiap lembar Kartu Pegangan lawan."
		},

		damage: "20×",
		cost: ["Water"]
	}, {
		name: {
			id: "Melawan Arus"
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