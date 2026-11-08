import { Card } from "models/database/card"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Phanpy"
	},

	illustrator: "Atsuko Nishida",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],

	description: {
		'id-id': "Phanpy membuat sarang dan hidup di pinggir sungai. Pokémon ini tidak merasa tenang jika tidak segera membersihkan tubuhnya setelah bermain di lumpur."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Tenaga Super"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'id-id': "Tubrukan Menggelinding"
		},

		damage: 60,
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card