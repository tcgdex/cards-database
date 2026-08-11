import { Card } from "models/database/card"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Charmander"
	},

	illustrator: "DOM",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],

	description: {
		'id-id': "Sejak lahir, api menyala di ekor Charmander. Hidupnya berakhir saat api tersebut padam."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Heat Tackle"
		},

		effect: {
			'id-id': "Pokémon ini juga menerima kerusakan sejumlah 10."
		},

		damage: 30,
		cost: ["Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card