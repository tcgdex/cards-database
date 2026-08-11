import { Card } from "models/database/card"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Glalie"
	},

	illustrator: "Oku",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	description: {
		'id-id': "Glalie membekukan unsur air yang ada di udara dalam sekejap agar mangsanya tidak dapat melarikan diri."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'id-id': "Damage Beat"
		},

		effect: {
			'id-id': "Serangan ini memberikan kerusakan sejumlah 20 untuk tiap Token Kerusakan yang dimiliki Pokémon Bertarung lawan."
		},

		damage: "20×",
		cost: ["Water"]
	}, {
		name: {
			'id-id': "Crazy Head"
		},

		effect: {
			'id-id': "Pilih 1 Energi yang dikenakan pada Pokémon ini, lalu buang ke Trash."
		},

		damage: 140,
		cost: ["Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card