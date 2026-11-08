import { Card } from "models/database/card"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Feebas"
	},

	illustrator: "Scav",
	category: "Pokemon",
	hp: 30,
	types: ["Water"],

	description: {
		'id-id': "Pokémon yang paling lusuh. Feebas berkumpul dalam jumlah besar dan tinggal di dasar sungai yang banyak tanaman airnya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Berontak"
		},

		effect: {
			'id-id': "Serangan ini memberikan kerusakan sejumlah 10 untuk tiap Token Kerusakan yang dimiliki Pokémon ini."
		},

		damage: "10×",
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card