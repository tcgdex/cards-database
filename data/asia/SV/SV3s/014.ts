import { Card } from "models/database/card"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Charmeleon"
	},

	illustrator: "Ryota Murayama",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],

	description: {
		'id-id': "Ketika pertarungan membuat semangat Charmeleon bergejolak, Pokémon ini meniupkan api berpijar dan membakar daerah sekelilingnya."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'id-id': "Heat Tackle"
		},

		effect: {
			'id-id': "Pokémon ini juga menerima kerusakan sejumlah 20."
		},

		damage: 70,
		cost: ["Fire", "Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card